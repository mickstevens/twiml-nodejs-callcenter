var twilio = require('twilio');
var client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
 
var from = 'YOUR_TWILIO_NUMBER';
var to = process.argv[2]; // take the passed in command-line argument
var url = 'YOUR_TWIML_BIN_URL';
 
if (!to) {
  throw new TypeError('Please pass in a phone number to call to this script.')
}
 
client.calls.create({
  from: from,
  to: to,
  url: url
}).then(function () {
  console.log('Your phone should be ringing');
}).catch(function (err) {
  console.error(err.message);
});
