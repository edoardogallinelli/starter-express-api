const nodemailer = require("nodemailer");
require("dotenv").config();
function serviceMail(data) {
  console.log("chiamato");
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
      user: "edoardogallinelli.job@gmail.com",
      pass: "xsmtpsib-d92d1e91b4ee1c7470a4eb8e3f16eb658da430f14fb0ca627f44392a73e3210e-8xknUTBvGSPOcjWt",
    },
    debug: false,
    logger: true,
  });
  console.log(data);
  const info = transporter.sendMail({
    from: `edoardogallinelli.job@gmail.com`, // sender address
    to: "edoardogallinelli.job@gmail.com", // list of receivers
    subject: "Occhio pà che vogliono comprare qualche dominio ", // Subject line
    text: `Ecco i dettagli: 
    nome: ${data.recapiti.name} ,
    cognome: ${data.recapiti.lastName} ,
    Telefono: ${data.recapiti.phone} ,
    Mail: ${data.recapiti.mail} ,
    Testo: ${data.recapiti.text},
    Domini selezionati: ${data.dominiRichiesti}
    `, // plain text body
  });

  transporter.sendMail(info, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  transporter.verify().then(console.log).catch(console.error);
}
module.exports = serviceMail;

