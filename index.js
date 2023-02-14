const themeToggler = document.getElementById('checkbox');

themeToggler.addEventListener('change', (event)=>{
    event.preventDefault();
    document.documentElement.classList.toggle("dark");
    console.log("haha")
})