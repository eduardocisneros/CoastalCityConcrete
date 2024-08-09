const listMenu = document.getElementById("list_menu");
const hamburgerMenu = document.getElementById("hamburger_menu");
const hamburgerMenuX = document.getElementById("hamburger_menu_x");

hamburgerMenu.addEventListener("click", ()=>{
    listMenu.classList.toggle("show-me")
});

hamburgerMenuX.addEventListener("click", ()=>{
    listMenu.classList.toggle("show-me")
});

