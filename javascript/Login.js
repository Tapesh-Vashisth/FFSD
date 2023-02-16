const emailAddress = document.getElementById('emailAddress')
const password = document.getElementById('password')
const loginButton = document.getElementById('loginBtn')

const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')

const validateIncomingEmailAddress = (value) => {
  console.log(value)
  console.log(validateEnteredEmail(value))
  if (value.length === 0) {
    return false
  }
  if (!validateEnteredEmail(value) && value.length !== 0) {
    emailError.style.display = 'block'
    return false
  }
  emailError.style.display = 'none'
  return true
}

const enableLoginButton = () => {
  if (!validateIncomingEmailAddress(emailAddress.value)) {
    loginButton.disabled = true
  }
}

emailAddress.addEventListener('change', (e) => {
  emailAddress.focus()
  validateIncomingEmailAddress(e.target.value)
})

enableLoginButton()
