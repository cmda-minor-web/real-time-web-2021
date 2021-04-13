const socket = io()

const characterName = document.querySelectorAll('.starters--option__name')
const characterInputs = document.querySelectorAll('.starters--option__input')
const characterOptionImages = document.querySelectorAll('.starters--option__image')
const submitButton = document.querySelector('.starters > button')

socket.on('chooseStarter', starters => {
  starters.map((starter, index) => {
    characterName[index].innerText = starter.name
    characterOptionImages[index].src = starter.sprite
  })
})

characterInputs.forEach(input => {
  input.addEventListener('change', e => {
    if (e.target.checked) {
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
    }
  })
})