module.exports = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}