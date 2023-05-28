let fs = require('fs') // importa il modulo Node.js "fs", che permette di lavorare con il file system del computer.

function addElementToJSON(jsonData, element) { // funzione che prende due argomenti, jsonData e element
  jsonData.push(element) //metodo push che inserisce nel vettore l'elemento 
}

function writeFileJSON(file, dataJSON) { // funzione che prende due parametri: file, che rappresenta il nome del file in cui si vuole scrivere i dati, e dataJSON, che rappresenta i dati che si vogliono scrivere nel file in formato JSON
  fs.writeFile(file, JSON.stringify(dataJSON), (err) => {  // JSON.stringify =  converte l'oggetto dataJSON in una stringa JSON prima di scriverlo nel file.
    if (err) {
      throw err;
    } else
      console.log('i dati li ho scritti nel file data.json'); //stampa la stringa tra virgolette
  })
}
function readFile(percorsoFile) {
  var data = fs.readFileSync(percorsoFile, "utf8");
  console.log("finito readFile function!"); //stampa un messaggio nella console 
  return JSON.parse(data);  //restituisce il contenuto del file come oggetto JSON.
}


module.exports = { addElementToJSON: addElementToJSON, writeFileJSON: writeFileJSON, readFile: readFile }  //permette la visualizzazione di aktri moduli che leggono e scrivono nel file Json 
