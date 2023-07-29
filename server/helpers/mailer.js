require("dotenv").config();
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "henry38b10@gmail.com",
      pass: "dxzoarejtqxhpvdg",
    },
  });

module.exports = transporter