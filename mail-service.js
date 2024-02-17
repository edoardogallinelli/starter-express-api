const nodemailer = require("nodemailer");
require("dotenv").config();
function serviceMail(data) {
  // console.log("chiamato");
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  //   port: process.env.SMTP_PORT || 587,
  //   auth: {
  //     user: process.env.USER,
  //     pass: process.env.KEY,
  //   },
  //   debug: false,
  //   logger: true,
  // });
  // console.log(data);
  // const info = transporter.sendMail({
  //   from: `edoardogallinelli.job@gmail.com`, // sender address
  //   to: "edoardogallinelli.job@gmail.com", // list of receivers
  //   subject: "Occhio pà che vogliono comprare qualche dominio ", // Subject line
  //   text: `Ecco i dettagli: 
  //   nome: ${data.recapiti.name} ,
  //   cognome: ${data.recapiti.lastName} ,
  //   Telefono: ${data.recapiti.phone} ,
  //   Mail: ${data.recapiti.mail} ,
  //   Testo: ${data.recapiti.text},
  //   Domini selezionati: ${data.dominiRichiesti}
  //   `, // plain text body
  // });

  // transporter.sendMail(info, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Email sent: " + info.response);
  //   }
  // });
  // transporter.verify().then(console.log).catch(console.error);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL,
      pass: process.env.APP_PSW,
    },
  });

  const mailOptions = {
    from: process.env.MAIL,
    to: "edoardogallinelli.job@gmail.com",
    subject: "Richiesta di acquisto Dominio",
    text: `Ecco i dettagli: 
          nome: ${data.recapiti.name} ,
          cognome: ${data.recapiti.lastName} ,
          Telefono: ${data.recapiti.phone} ,
          Mail: ${data.recapiti.mail} ,
          Testo: ${data.recapiti.text},
          Domini selezionati: ${data.dominiRichiesti}

          N.B.: ricordati di rispondere il prima prossibile.
   `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
module.exports = serviceMail;

