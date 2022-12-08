import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: "bakirovartem69@gmail.com",
        pass: "qfybirbuplccuawb",
    }
});

export default transporter;