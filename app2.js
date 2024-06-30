//npm init -y
//npm i nodemailer googleapis dotenv
//touch app2.js

require("dotenv").config();

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

console.log(CLIENT_ID);
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "xeadsaud@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "ART 👋 <xeadsaud@gmail.com>",
      to: "saadalmasmullaji@gmail.com",
      subject: "Hello form gmail api",
      text: "Hi this is art 2", // text to display on mail
      html: "<h1>Hi this is html 2</h>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("email sent", result))
  .catch((error) => console.log(error.message));
