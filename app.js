require("dotenv").config();

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const emails = [
  "pythoncpp07@gmail.com",
  "seussstaudinger@gmail.com",
  "saadalmasmullaji@gmail.com",
];

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

    await Promise.all(
      emails.map(async (email) => {
        const mailOptions = {
          from: "ART 👋 <xeadsaud@gmail.com>",
          to: email,
          subject: "Hello form gmail api",
          text: "Hi this is art 2", // text to display on mail
          html: "<h1>Hi this is html 2</h1>",
        };

        const result = await transport.sendMail(mailOptions);
        console.log(`Email sent to ${email}: ${result.response}`);
      })
    );
  } catch (error) {
    console.log(error.message);
  }
}

sendMail();
