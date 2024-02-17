const nodemailer = require("nodemailer");
require("dotenv").config();
async function serviceMail(data) {


  await new Promise((resolve, reject) => {
    console.log('chiamato service send mail');



    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL,
        pass: process.env.APP_PSW,
      },
    });
  
    const mailOptions = {
      from: process.env.MAIL,
      to: "gallinelliroma@gmail.com",
      cc: ['edoardogallinelli@gmail.com', 'edoardogallinelli.job@gmail.com'],
      subject: "Richiesta di acquisto Dominio",
      text: `Ecco i dettagli: 
            l'utente scrive dal sito: ${data.fromUrl}
            nome: ${data.recapiti.name} ,
            cognome: ${data.recapiti.lastName} ,
            Telefono: ${data.recapiti.phone} ,
            Mail: ${data.recapiti.mail} ,
            Testo: ${data.recapiti.text},
            Domini selezionati: ${data.dominiRichiesti}
  
            N.B.: ricordati di rispondere il prima prossibile.
     `
    };
    console.log(mailOptions, 'options')
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error is " + error);
        resolve(false); // or use rejcet(false) but then you will have to handle errors
      }
      else {
        console.log('Email sent: ' + info.response);
        resolve(true);
      }
    });

    // transporter.verify().then(console.log).catch(console.error);
  })

}
module.exports = serviceMail;

