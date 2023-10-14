const otpSender = require('node-otp-sender');



// // Optional: Customize retry settings
// const maxRetries = 3; // Number of retry attempts (default is 3)
// const retryDelay = 1000; // Delay between retries in milliseconds (default is 1000 milliseconds or 1 second)

const otpV= 
(req,res)=> {
  otpSender(senderEmail, senderPassword, recipientEmail, subject)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};


  module.exports={otpV}