var mailgun = require('mailgun-js');

const emailController = {};

emailController.send = function(req, res, next) {
  var api_key = '';
  var domain = '';
  var mg = mailgun({apiKey: api_key, domain: domain});
  var data = {
    from: req.body.email,
    to: 'gianthedesigner@gmail.com',
    subject: `${req.body.name}: ${req.body.subject}`,
    text: req.body.message,
  };
  mg.messages().send(data, function (err) {
    if (err) res.status(400).send('Somthing\'s not right...');
    next();
  });
}

module.exports = emailController;
