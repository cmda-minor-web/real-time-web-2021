const fetch = require('node-fetch')

module.exports = async function fetchRESTData() {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=7')
    .then(response => response.json())
    .then(pokemons => pokemons.results.filter(result => {
      return result.name === 'bulbasaur'
        || result.name === 'charmander'
        || result.name === 'squirtle'
    }))
    .then(async starterPokemons => {
      return await Promise.all(starterPokemons.map(starter => {
        return fetch(starter.url)
          .then(response => response.json())
          .then(starterPokemonData => {
            const {
              name,
              sprites: { versions: { 'generation-viii': { icons: { 'front_default': sprite } } } }
            } = starterPokemonData
            return {
              name,
              sprite
            }
          })
      }))
      .then(pokemons => [...pokemons])
    })
}