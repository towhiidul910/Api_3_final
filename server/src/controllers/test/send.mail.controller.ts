//✅ this is works
import { RequestHandler } from "express";

import nodemailer = require("nodemailer");

export const sendMail: RequestHandler = (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `New message from ${name}`,
      text: message,
    };

    transporter.sendMail(mailOptions);

    res.status(200).send("Email send successfully")
  } catch (err) {
    res.status(500).send("Email send failed")
    next(err);
  }
};
