let menubar = document.getElementById("menubar");
let menu = document.querySelector(".left_container");

menubar.addEventListener("click", () => {
  menu.classList.add("show_menu");
});
document.getElementById("closemenu").addEventListener("click", ()=> {
    menu.classList.remove("show_menu");
});
async function main() {
    let data = await fetch("http://127.0.0.1:5500/songs/");
    let response = await data.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let links = div.getElementsByTagName("a");
    // let name = div.querySelectorAll(".name");
    for (let index = 3; index < links.length; index++) {
      const element = links[index];
      console.log(element.href)
      console.log(element.innerText)
      console.log(element.innerHTML)
    }
    let names = div.querySelectorAll(".name");
    console.log(names);
    for (let index = 1; index < names.length; index++) {
      const element = names[index];
      // console.log(element.href)
      console.log(element.innerText)
      // console.log(element.innerHTML)
    }
}
main();