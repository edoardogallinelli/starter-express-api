const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nome del tuo progetto',
      version: '1.0.0',
      description: 'Descrizione della tua API',
    },
    servers: [
      {
        url: 'http://localhost:8080', // Modifica questo URL in base al tuo ambiente
      },
    ],
  },
  apis: ['./*.js'], // Specifica il percorso dei file contenenti le tue definizioni di API
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
