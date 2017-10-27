const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const validator = require('validator');
const emailController = require('./controller/email-controller');

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
app.use('/work', express.static(path.join(__dirname, '../work')));
app.use('/thumb', express.static(path.join(__dirname, '../thumb')));

const PORT = 3000;

app.listen(PORT, () => {
  console.log('You are listening on ' + PORT);
});