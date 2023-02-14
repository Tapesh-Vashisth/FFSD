const toggledark= document.getElementById("toggle");

toggledark.addEventListener('click', (event)=>{
    event.preventDefault();
    document.documentElement.classList.toggle("dark");
    console.log("haha")
})