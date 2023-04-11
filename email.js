import * as dotenv from 'dotenv'
dotenv.config()
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SG_API_KEY);
console.log(process.env.FROM_EMAIL)

const msg = {
  to: `${sgMail.setApiKey(process.env.FROM_EMAIL)}`,
  from: `xfasfa@gmail.com`, // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();