var menutoggle = document.querySelector(".menu-toggle");
var menu = document.getElementById("menu");

menutoggle.addEventListener("click",(e) => {
    menu.classList.toggle("mostrar")
})