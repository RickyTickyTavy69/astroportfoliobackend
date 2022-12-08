import nodemailer from "nodemailer";

import * as dotenv from "dotenv"
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    }
});

export default transporter;