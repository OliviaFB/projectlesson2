let crossOpening = document.querySelector(".cross-opening");
let crossClosing = document.querySelector(".cross-closing");

let menu = document.querySelector(".menu");

crossOpening.addEventListener("click", (event) => {
  menu.style = "z-index: 15";
});

crossClosing.addEventListener("click", (event) => {
  menu.style = "z-index: 0";
});

let responsiveMenu = document.querySelector(".responsive-menu");
console.log(responsiveMenu);

responsiveMenu.addEventListener("click", (event) => {
  menu.style = "display: block; width: 100%; z-index: 11; height: 675px";
});
