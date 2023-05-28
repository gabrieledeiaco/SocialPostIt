const path = require('path');  //importa la libreria path
const express = require('express'); //importa la libreria express
const bodyParser = require('body-parser');  //importa la libreria body-parser
const fs = require('fs');  //importa la libreria fs(file-system)
let lib = require('./LogiocoDeiacoMacrino.js');  //modulo personalizzato 
let jsonData = lib.readFile('./data/data.json');  // legge il contenuto del file JSON "./data/data.json" utilizzando una funzione chiamata readFile
const app = express();  //richiesat di un applicazione epxpress assegnata dentro la variabile app 
const jsonFilePath = './data/data.json';  //definita la costante jsonFilePath che rappresenta il percorso del file JSON che contiene i dati.

app.use('/form', express.static(path.join(__dirname, 'form'))); //quando il client richiede una pagina web che richiede l'accesso ai file nella cartella "form", il server invia i file richiesti al client.
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/input/input.html`));//il server risponde con il file HTML contenuto nella cartella "input" quando viene effettuata una richiesta di ottenere quella pagina
});
app.get('/post', (req, res) => {
  res.sendFile(path.join(`${__dirname}/output/result.html`));  ////il server risponde con il file HTML contenuto nella cartella "result" quando viene effettuata una richiesta di ottenere quella pagina
});
app.get('/data/data.json', (req, res) => {
  res.sendFile(path.join(`${__dirname}/data/data.json`));  //stessa cosa delle precedenti ma chiamando un'altra pagina 
});
app.get('/viewPost', (req, res) => {
  res.sendFile(path.join(`${__dirname}/output/result.html`));  //stessa cosa delle precedenti ma chiamando un'altra pagina 
});
app.post('/viewPost', (req, res) => {
  res.redirect((path.join(`/viewPost`)));
});
app.post('/add', (req, res) => {
  const nickname = {   //qui stiamo creando un nuovo oggetto nickname con due proprietà, nickname e commento.
    nickname: req.body.nickname,
    commento: req.body.commento
  };
  let data = JSON.parse(fs.readFileSync(jsonFilePath));  //qui stiamo leggendo un file JSON utilizzando il modulo fs di Node.js.
  lib.addElementToJSON(data, nickname);  //qui stiamo utilizzando una funzione personalizzata chiamata addElementToJSON, che aggiunge l'oggetto nickname al file JSON
  lib.writeFileJSON('./data/data.json', data);
  
  res.redirect((path.join(`/post`)));
});
app.listen(5050, () => {  //porta su cui girerà il post-it
  console.log('Server started on port 5050');  //stampa la scritta tra le virgolette
});

