import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== "development",
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD },
});

export const sendEmail = async (data) => {
  const { sender, receipients, subject, message } = data;
  return await transport.sendMail({
    from: sender,
    to: receipients,
    subject,
    html: message,
    text:message
  })
}