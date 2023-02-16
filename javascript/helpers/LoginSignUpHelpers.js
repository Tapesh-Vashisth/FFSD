const emailValidationRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
const passwordValidationRegex = new RegExp(
  /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/,
)

const validateEnteredPassword = (password) => {
  return passwordValidationRegex.test(password)
}

const validateEnteredEmail = (emailAddress) => {
  return emailValidationRegex.test(emailAddress)
}

