const router = require('express').Router()
const getStarterPokemons = require('../queries/getStarters')

router.get('/', async (req, res) => {
  const pokemons = await getStarterPokemons()
  res.render('pages/select', { pokemons })
})

router.post('/', (req, res) => {
  req.session.sprite = req.body.sprite
  res.redirect('/game')
})

module.exports = router