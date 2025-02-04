const express = require('express');
const app = express()
const port = 3000

//definisco la cartella per i file statici
app.use(express.static('pubblic'));

app.get('/', (req, res) => {
    res.send("Server del mio blog");
})



app.get('/bacheca', (req, res) => {
    const bacheca = [
        {
            titolo: "Giornata al mare",
            contenuto: "mare e sole",
            immagine: "http://localhost:3000/img/ciambellone.jpeg",
            tags: ["estate", "mare", "vacanze", "sole"]

        }, 
        {
            titolo: "Snack con cracker",
            contenuto: "Deliziosi cracker croccanti da gustare in qualsiasi momento",
            immagine: "http://localhost:3000/img/cracker_barbabietola.jpeg",
            tags: ["snack", "salato", "aperitivo", "snackveloci"]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: "Un dolce tradizionale, perfetto per il tè pomeridiano",
            immagine: "http://localhost:3000/img/pane_fritto_dolce.jpeg",
            tags: ["dolce", "fritto", "tradizione", "spuntino"]
        },
        {
            titolo: "Pasta con barbabietole",
            contenuto: "Un piatto colorato e saporito, con un tocco di barbabietola",
            immagine: "http://localhost:3000/img/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola", "vegetariano", "ricetta"]
        },
        {
            titolo: "Torta Paesana",
            contenuto: "Un dolce rustico, tipico delle tradizioni contadine",
            immagine: "http://localhost:3000/img/tortapaesana.jpeg",
            tags: ["dolce", "torta", "tradizionale", "casalingo"]
        }
    ];
    res.json(bacheca);
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
    
})

