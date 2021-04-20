const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('pages/game', { data: req.session.sprite })
})

module.exports = router