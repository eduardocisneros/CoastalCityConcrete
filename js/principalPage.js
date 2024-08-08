const listMenu = document.getElementById("list_menu");
const hamburgerMenu = document.getElementById("hamburger_menu");

hamburgerMenu.addEventListener("click", ()=>{
    listMenu.classList.toggle("show-me")
    console.log(listMenu)
});
/* document.addEventListener('click', (e) => {
    if (e.target !== hamburgerMenu && e.target !== listMenu) {
        listMenu.classList.remove("show-me");
    }
}); */