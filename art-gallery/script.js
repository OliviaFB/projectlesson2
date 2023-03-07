let crossOpening = document.querySelector(".cross-opening");
let crossClosing = document.querySelector(".cross-closing");
let menu = document.querySelector(".menu");

crossOpening.addEventListener("click", (event) => {
  menu.style = "width: 450px";
});

crossClosing.addEventListener("click", (event) => {
  menu.style = "width: 0px";
});

let responsiveMenu = document.querySelector(".responsive-menu");
console.log(responsiveMenu);

responsiveMenu.addEventListener("click", (event) => {
  menu.style =
    "display: block; width: auto; height: 675px; transition: 0.5s ease";
});
