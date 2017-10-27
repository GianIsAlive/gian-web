var mailgun = require('mailgun-js');

const emailController = {};

emailController.send = function(req, res, next) {
  var api_key = 'key-6bf7a4d126bb3bfcd4c386a44bad6ba3';
  var domain = 'sandbox9dcbbea458824c0ca640da14edf7cbcd.mailgun.org';
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
