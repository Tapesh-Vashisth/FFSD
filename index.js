const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

var theme = "dark";
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  document.documentElement.classList.toggle("dark");
  setTimeout(() => {
    themeIcon.classList.remove("change");
  }, 650);
  themeIcon.classList.add("change");
  container.classList.remove('shadowlight');
  container.classList.add('shadowdark');
  themeIcon.src = sun;
}
function setDark() {
  document.documentElement.classList.toggle("dark");
  setTimeout(() => {
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  container.classList.remove('shadowdark');
  container.classList.add('shadowlight');
  themeIcon.src = moon;
}
