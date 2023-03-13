let emailInput = document.getElementById('signup-email')
let passwordInput = document.getElementById('signup-password')
let confirmPasswordInput = document.getElementById('signup-confirm-password')
let submit = document.getElementById('signup-submit')
let alerts = document.getElementsByClassName('error-message')

let email = ''
let password = ''
let confirmPassword = ''

submit.disabled = true

function buttonToggler(email, password, confirmPassword) {
  if (
    validateEnteredEmail(email) &&
    validateEnteredPassword(password) &&
    validateEnteredPassword(confirmPassword) &&
    confirmPassword === password
  ) {
    submit.disabled = false
  }
}

emailInput.addEventListener('change', (e) => {
  email = e.target.value
  if (!validateEnteredEmail(e.target.value)) {
    alerts[0].style.display = 'block'
  } else {
    alerts[0].style.display = 'none'
    buttonToggler(email, password, confirmPassword)
  }
})

passwordInput.addEventListener('change', (e) => {
  password = e.target.value
  if (!validateEnteredPassword(e.target.value)) {
    alerts[1].style.display = 'block'
  } else {
    alerts[1].style.display = 'none'
    buttonToggler(email, password, confirmPassword)
  }
})

confirmPasswordInput.addEventListener('change', (e) => {
  confirmPassword = e.target.value
  if (password !== confirmPassword) {
    alerts[2].style.display = 'block'
  } else {
    alerts[2].style.display = 'none'
    buttonToggler(email, password, confirmPassword)
  }
})

submit.addEventListener('click', (e) => {
  console.log(email, password, confirmPassword)
})
