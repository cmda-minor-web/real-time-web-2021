// HTML Elements
const
  form = document.querySelector('.starters'),
  characterInputs = document.querySelectorAll('.starters--option__input'),
  submitButton = document.querySelector('.starters > button')

// Socket.io connection
const socket = io()

// Enable/Disable submit button
characterInputs.forEach(input => {
  if (input.checked) !input.checked

  input.addEventListener('change', e => {
    if (e.target.checked) {
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
    }
  })
})

// Submit starter choice for avatar
form.addEventListener('submit', e => {
  e.preventDefault()
  const checkedStarter = document.querySelector('.starters--option__input:checked ~ img')
  const sprite = createHiddenInput(checkedStarter.src)

  form.appendChild(sprite)
  form.submit()
})

function createHiddenInput(src) {
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = 'sprite'
  input.value = src
  return input
}