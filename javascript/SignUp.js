let emailInput = document.getElementById("signup-email");
let passwordInput = document.getElementById("signup-password");
let confirmPasswordInput = document.getElementById("signup-confirm-password");
let submit = document.getElementById("signup-submit");
let alerts = document.getElementsByClassName("alerts");

submit.disabled = true;

emailInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (!validateEnteredEmail(e.target.value)) {
        alerts[0].style.display = "block";
    }
});

passwordInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (!validateEnteredPassword(e.target.value)) {
        alerts[1].style.display = "block";
    }
});

confirmPasswordInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (!validateEnteredPassword(e.target.value)) {
        alerts[2].style.display = "block";
    }
});

submit.addEventListener("click", (e) => {
    console.log("hihiihih");
});
