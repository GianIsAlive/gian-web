const cluster = require('cluster');
// Code to run if we're in the master process
if (cluster.isMaster) {
  // Count the machine's CPUs
  var cpuCount = require('os').cpus().length;
  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
  // Listen for terminating workers
  cluster.on('exit', function (worker) {
    // Replace the terminated workers
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();
  });
// Code to run if we're in a worker process
} else {
  const AWS = require('aws-sdk');
  const express = require('express');
  const path = require('path');
  const fs = require('fs');
  const bodyParser = require('body-parser');
  const validator = require('validator');
  const history = require('connect-history-api-fallback');
  const rssParser = require('rss-parser');

  const emailController = require('./controller/email-controller');

  AWS.config.region = process.env.REGION;

  const app = express();
  app.use(history({
    index: '/',
  }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  // Send email upon completing contact form
  app.post('/contact', emailController.send, (req, res) => {
    res.send('Thank you for reaching out! I\'ll get back to you ASAP!');
  });

  // Serve up all the thumbnails for the homepage
  app.get('/thumb', (req, res) => {
    fs.readdir('./thumb', (err, files) => {
      files = files.sort();
      res.send(files);
    });
  });

  app.get('/feed', (req, res) => {
    rssParser.parseURL('https://medium.com/feed/@GianIsAlive', function(err, response) {
      res.send(response.feed.entries);
    });
  });

  // Serve up spec images related to specific project
  app.get('/work/:projectName', (req, res) => {
    let workName = validator.whitelist(req.params.projectName, /\-\[a-zA-Z0-9\]/);
    fs.readdir(`./work/${workName}`, (err, files) => {
      if (err) res.status(400).send('Work Not Found1');
      let description = require('../work_dis/description');
      description = description[workName];
      res.send({
        description,
        files,
      });
    });
  });

  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.use('/img', express.static(path.join(__dirname, '../dist/img')));
  app.use('/work', express.static(path.join(__dirname, '../work')));
  app.use('/work/dist', express.static(path.join(__dirname, '../dist')));
  app.use('/thumb', express.static(path.join(__dirname, '../thumb')));

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log('You are listening on ' + port);
  });
}
