let menubar = document.getElementById("menubar");
let menu    = document.querySelector(".left_container");

menubar.addEventListener("click", ()=> {
    menu.classList.toggle("show_menu");
    menubar.classList.toggle("menubar_move");
})