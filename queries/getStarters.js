const fetch = require('node-fetch')

// module.exports = function() {
//   return fetchGraphQLData(`
//     query getStarters {
//       pokemon_v2_pokemon(where: {
//         _or: [
//           {id: {_eq: 1}},
//           {id: {_eq: 4}},
//           {id: {_eq: 7}}
//         ]
//       }) {
//         name
//         pokemon_v2_pokemonsprites {
//           sprites
//         }
//       }
//     }
//   `)
// }

// async function fetchGraphQLData(query) {
//   const result = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
//     method: 'POST',
//     body: JSON.stringify({
//       query: query
//     })
//   })

//   return await result.json()
// }

module.exports = async function fetchRESTData() {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=7')
    .then(response => response.json())
    .then(data => data.results.filter(result => {
      return result.name === 'bulbasaur'
        || result.name === 'charmander'
        || result.name === 'squirtle'
    }))
    .then(async starters => {
      return await Promise.all(starters.map(starter => {
        return fetch(starter.url)
          .then(response => response.json())
          .then(data => {
            const {
              name,
              sprites: { versions: { 'generation-viii': { icons: { 'front_default': sprite } } } }
            } = data
            return {
              name,
              sprite
            }
          })
      }))
    })
}