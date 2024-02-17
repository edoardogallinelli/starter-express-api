const express = require("express");
const serviceMail = require("./mail-service");
const cors = require('cors');
var bodyParser = require('body-parser')
const { specs, swaggerUi } = require('./swagger');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.PORT;
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * @swagger
 * /available-domains:
 *   get:
 *     summary: Restituisce tutti i domini
 *     description: Ottiene la lista di tutti i domini.
 *     responses:
 *       '200':
 *         description: Successo. Restituisce la lista di tutti i post.
 */
app.get("/available-domains", (req, res) => {
  const DOMAINS = [{
    "id": "1",
    "descrizione": "1ab.it"
  },
  {
    "id": "2",
    "descrizione": "1ac.it"
  },
  {
    "id": "3",
    "descrizione": "1im.it"
  },
  {
    "id": "4",
    "descrizione": "1life.it"
  },
  {
    "id": "5",
    "descrizione": "1moto.it"
  },
  {
    "id": "6",
    "descrizione": "1new.it"
  },
  {
    "id": "7",
    "descrizione": "1roma.it"
  },
  {
    "id": "8",
    "descrizione": "ac1.it"
  },
  {
    "id": "9",
    "descrizione": "affariroma.it"
  },
  {
    "id": "10",
    "descrizione": "affitticaseroma.it"
  },
  {
    "id": "11",
    "descrizione": "agencycasa.it"
  },
  {
    "id": "12",
    "descrizione": "astimm.it"
  },
  {
    "id": "13",
    "descrizione": "athenahouse.it"
  },
  {
    "id": "14",
    "descrizione": "bniroma.it"
  },
  {
    "id": "15",
    "descrizione": "brunogallinelli.it"
  },
  {
    "id": "16",
    "descrizione": "buonacasa.it"
  },
  {
    "id": "17",
    "descrizione": "buonecase.it"
  },
  {
    "id": "18",
    "descrizione": "caracasa.it"
  },
  {
    "id": "19",
    "descrizione": "casabuona.it"
  },
  {
    "id": "20",
    "descrizione": "casacapital.it"
  },
  {
    "id": "21",
    "descrizione": "casacert.it"
  },
  {
    "id": "22",
    "descrizione": "casadigital.it"
  },
  {
    "id": "23",
    "descrizione": "casagency.it"
  },
  {
    "id": "24",
    "descrizione": "casalife.it"
  },
  {
    "id": "25",
    "descrizione": "casaliferoma.it"
  },
  {
    "id": "26",
    "descrizione": "casalight.it"
  },
  {
    "id": "27",
    "descrizione": "casameeting.it"
  },
  {
    "id": "28",
    "descrizione": "casanow.it"
  },
  {
    "id": "29",
    "descrizione": "casaoffice.it"
  },
  {
    "id": "30",
    "descrizione": "casaprice.it"
  },
  {
    "id": "31",
    "descrizione": "casaprof.it"
  },
  {
    "id": "32",
    "descrizione": "casapropria.it"
  },
  {
    "id": "33",
    "descrizione": "casaurbe.it"
  },
  {
    "id": "34",
    "descrizione": "casaurbis.it"
  },
  {
    "id": "35",
    "descrizione": "casavale.it"
  },
  {
    "id": "36",
    "descrizione": "casespeciali.it"
  },
  {
    "id": "37",
    "descrizione": "cicliroma.it"
  },
  {
    "id": "38",
    "descrizione": "comevenderealmeglio.it"
  },
  {
    "id": "39",
    "descrizione": "compraffittare.it"
  },
  {
    "id": "40",
    "descrizione": "compraffittasi.it"
  },
  {
    "id": "41",
    "descrizione": "covidroma.it"
  },
  {
    "id": "42",
    "descrizione": "doministore.it"
  },
  {
    "id": "43",
    "descrizione": "e-bikeprice.it"
  },
  {
    "id": "44",
    "descrizione": "e-bikeroma.it"
  },
  {
    "id": "45",
    "descrizione": "ebikeprice.it"
  },
  {
    "id": "46",
    "descrizione": "fondipatrimoniali.com"
  },
  {
    "id": "47",
    "descrizione": "fondipatrimoniali.it"
  },
  {
    "id": "48",
    "descrizione": "frimm1.it"
  },
  {
    "id": "49",
    "descrizione": "frimmaffari.it"
  },
  {
    "id": "50",
    "descrizione": "frimmappio.it"
  },
  {
    "id": "51",
    "descrizione": "frimmcentro.it"
  },
  {
    "id": "52",
    "descrizione": "frimmdigital.it"
  },
  {
    "id": "53",
    "descrizione": "frimmimmobiliare.it"
  },
  {
    "id": "54",
    "descrizione": "frimmone.it"
  },
  {
    "id": "55",
    "descrizione": "frimmromacentro.it"
  },
  {
    "id": "56",
    "descrizione": "frimmromaurbis.it"
  },
  {
    "id": "57",
    "descrizione": "frimmsangiovanni.it"
  },
  {
    "id": "58",
    "descrizione": "frimmstore.it"
  },
  {
    "id": "59",
    "descrizione": "frimmtuscolano.it"
  },
  {
    "id": "60",
    "descrizione": "frimmuno.it"
  },
  {
    "id": "61",
    "descrizione": "frimmurbis.com"
  },
  {
    "id": "62",
    "descrizione": "frimmurbis.it"
  },
  {
    "id": "63",
    "descrizione": "gallinelli.it"
  },
  {
    "id": "64",
    "descrizione": "gallinellibruno.it"
  },
  {
    "id": "65",
    "descrizione": "ginevragallinelli.it"
  },
  {
    "id": "66",
    "descrizione": "grandiinvestimenti.it"
  },
  {
    "id": "67",
    "descrizione": "grandinvestimenti.it"
  },
  {
    "id": "68",
    "descrizione": "ilnegoziatore.com"
  },
  {
    "id": "69",
    "descrizione": "ilnegoziatoreimmobiliare.it"
  },
  {
    "id": "70",
    "descrizione": "immobiladhoc.it"
  },
  {
    "id": "71",
    "descrizione": "immobilagency.it"
  },
  {
    "id": "72",
    "descrizione": "immobilcert.it"
  },
  {
    "id": "73",
    "descrizione": "immobiliarefrimm.it"
  },
  {
    "id": "74",
    "descrizione": "immobiliareromaurbis.it"
  },
  {
    "id": "75",
    "descrizione": "immobiliareteam.it"
  },
  {
    "id": "76",
    "descrizione": "immobiliareurbisroma.it"
  },
  {
    "id": "77",
    "descrizione": "immobilprof.it"
  },
  {
    "id": "78",
    "descrizione": "immobilstore.it"
  },
  {
    "id": "79",
    "descrizione": "immobilurbis.it"
  },
  {
    "id": "80",
    "descrizione": "immoroma.it"
  },
  {
    "id": "81",
    "descrizione": "imroma.it"
  },
  {
    "id": "82",
    "descrizione": "mediocasaroma.it"
  },
  {
    "id": "83",
    "descrizione": "mediocase.it"
  },
  {
    "id": "84",
    "descrizione": "mlsfrimm.it"
  },
  {
    "id": "85",
    "descrizione": "negoziatoreimmobiliare.it"
  },
  {
    "id": "86",
    "descrizione": "negoziazionecasa.com"
  },
  {
    "id": "87",
    "descrizione": "negoziazionecasa.it"
  },
  {
    "id": "88",
    "descrizione": "negoziazioneimmobiliare.it"
  },
  {
    "id": "89",
    "descrizione": "nonsvendere.it"
  },
  {
    "id": "90",
    "descrizione": "nonsvendo.it"
  },
  {
    "id": "91",
    "descrizione": "nudapro.it"
  },
  {
    "id": "92",
    "descrizione": "okayroma.it"
  },
  {
    "id": "93",
    "descrizione": "okeyroma.it"
  },
  {
    "id": "94",
    "descrizione": "olimpiando.it"
  },
  {
    "id": "95",
    "descrizione": "onecasa.it"
  },
  {
    "id": "96",
    "descrizione": "onlineroma.it"
  },
  {
    "id": "97",
    "descrizione": "pinkopalla.it"
  },
  {
    "id": "98",
    "descrizione": "pointcasa.it"
  },
  {
    "id": "99",
    "descrizione": "proimm.it"
  },
  {
    "id": "100",
    "descrizione": "quantovalecasa.it"
  },
  {
    "id": "101",
    "descrizione": "remaxadhoc.it"
  },
  {
    "id": "102",
    "descrizione": "remaxroma.it"
  },
  {
    "id": "103",
    "descrizione": "retemls.it"
  },
  {
    "id": "104",
    "descrizione": "romacentralhouse.it"
  },
  {
    "id": "105",
    "descrizione": "romaffare.com"
  },
  {
    "id": "106",
    "descrizione": "romaffare.it"
  },
  {
    "id": "107",
    "descrizione": "romaffitti.com"
  },
  {
    "id": "108",
    "descrizione": "romaffitti.it"
  },
  {
    "id": "109",
    "descrizione": "romagency.it"
  },
  {
    "id": "110",
    "descrizione": "romanacase.it"
  },
  {
    "id": "111",
    "descrizione": "romaurbe.it"
  },
  {
    "id": "112",
    "descrizione": "romaurbis.com"
  },
  {
    "id": "113",
    "descrizione": "romaurbis.it"
  },
  {
    "id": "114",
    "descrizione": "romaurbisimmobiliare.it"
  },
  {
    "id": "115",
    "descrizione": "romaurbs.it"
  },
  {
    "id": "116",
    "descrizione": "sapienzacasa.it"
  },
  {
    "id": "117",
    "descrizione": "selezionecase.it"
  },
  {
    "id": "118",
    "descrizione": "sellhome.it"
  },
  {
    "id": "119",
    "descrizione": "sitoaste.it"
  },
  {
    "id": "120",
    "descrizione": "sitocase.it"
  },
  {
    "id": "121",
    "descrizione": "soluzioniadhoc.it"
  },
  {
    "id": "122",
    "descrizione": "stimarecasa.it"
  },
  {
    "id": "123",
    "descrizione": "tecnoagency.it"
  },
  {
    "id": "124",
    "descrizione": "trovacasaroma.it"
  },
  {
    "id": "125",
    "descrizione": "trovacaseroma.it"
  },
  {
    "id": "126",
    "descrizione": "urbest.it"
  },
  {
    "id": "127",
    "descrizione": "urbiscasa.it"
  },
  {
    "id": "128",
    "descrizione": "urbisfrimm.it"
  },
  {
    "id": "129",
    "descrizione": "urbisre.it"
  },
  {
    "id": "130",
    "descrizione": "urbisroma.it"
  },
  {
    "id": "131",
    "descrizione": "valorecasaroma.it"
  },
  {
    "id": "132",
    "descrizione": "valorecerto.com"
  },
  {
    "id": "133",
    "descrizione": "valorecerto.it"
  },
  {
    "id": "134",
    "descrizione": "valoremercato.it"
  },
  {
    "id": "135",
    "descrizione": "valoresatto.it"
  },
  {
    "id": "136",
    "descrizione": "valutatorecertificato.it"
  },
  {
    "id": "137",
    "descrizione": "valutazionecertificata.com"
  },
  {
    "id": "138",
    "descrizione": "vendocasaroma.it"
  }]
  res.send(DOMAINS);
});

/**
 * @swagger
 * /send-mail:
 *   post: 
 *    summary: Effetua una chiamata al servizio ServiceMail.
 *    responses: 
 *     '200': 
 *        description: all good. 
 *     '500': 
 *      description:  fuck server is broken 
 *    '400': 
 *      description: sorry man, try again. bad request.  
 * 
 */
app.post("/send-mail", async (req, res) => {
  const body = req.body
  await serviceMail(body)
  res.send({ messaggio: 'Dati inviati con successo' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
