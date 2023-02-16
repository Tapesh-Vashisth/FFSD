const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const passwordValidationRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/