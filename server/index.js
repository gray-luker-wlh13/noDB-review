const express = require('express'),
    cors = require('cors'),
    gc = require('./controllers/grassCtrl');
    pc = require('./controllers/pokeCtrl');
//const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

//base url (https://pokeapi.co/api/v2)
//endpoints 
//grassCtrl
app.get('/api/wild-pokemon', gc.getWildPokemon);

//pokeCtrl
app.get('/api/pokemon', pc.getAllPokemon);
app.post('/api/pokemon', pc.catch);
app.put('/api/pokemon/:id', pc.rename);
app.delete('/api/pokemon/:id', pc.release);

const port = 4040;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
})