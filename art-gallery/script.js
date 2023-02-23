let crossOpening = document.querySelector(".cross-opening");
let crossClosing = document.querySelector(".cross-closing");

let menu = document.querySelector(".menu");

crossOpening.addEventListener("click", (event) => {
  menu.style = "width: 450px; z-index: 20; transition: 2s";
});

crossClosing.addEventListener("click", (event) => {
  menu.style = "width: 0px; z-index: -10; transition: 2s";
});

let responsiveMenu = document.querySelector(".responsive-menu");
console.log(responsiveMenu);

responsiveMenu.addEventListener("click", (event) => {
  menu.style = "display: block; width: 100%; z-index: 11; height: 675px";
});
