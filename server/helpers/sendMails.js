import nodemailer from "nodemailer";

const sendMail =  (to, subject, html) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.email}`,
      pass: `${process.env.mailPassword}`,
    },
  });
  let mailOptions = {
    from: "parulsahni3282@gmail.com",
    to,
    subject,
    html,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log("Error Occured " + error);
    } else {
      console.log("Email Sent Successfully to " + mailOptions.to);
    }
  });
};

export default sendMail;
