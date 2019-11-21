const axios = require('axios');

module.exports = {
    getWildPokemon: (req, res) => {
        const pokemonArr = [];
        const rand1 = Math.ceil(Math.random() * 151)
        const rand2 = Math.ceil(Math.random() * 151)
        const rand3 = Math.ceil(Math.random() * 151)

        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`).then(response => {
            pokemonArr.push(response.data)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`).then(response => {
                pokemonArr.push(response.data)
                axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`).then(response => {
                    pokemonArr.push(response.data)
                    res.status(200).send(pokemonArr)
                })
            })
        }).catch(err => res.status(500).send(err))
    }
}