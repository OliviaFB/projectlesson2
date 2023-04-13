// let factor = document.querySelector(".portion-number").innerHTML;

// let amount = document.querySelector(".amount").innerHTML;
// let unit = document.querySelector(".unit").innerHTML;
// let name = document.querySelector(".name").innerHTML;

// const hummus = function () {
//   let ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// hummus(factor);

let factor = document.querySelector(".portion-number").value;

factor = document.getElementById("text").innerHTML;

let count = 1;
for (i = count; i <= 6; i++) {
  factor++;
  console.log(factor);
}

let selectBox = document.getElementById("portions");

let option = document.createElement("option");
option.text = factor;

selectBox.add(option);

let ingredients = [
  { amount: 1 * factor, unit: "can", name: "chickpeas" },
  { amount: 0.25 * factor, unit: "cup", name: "tahini" },
  { amount: 0.25 * factor, unit: "cup", name: "lemon juice" },
  { amount: 1 * factor, unit: "clove", name: "garlic" },
  { amount: 2 * factor, unit: "tablespoon", name: "olive oil" },
  { amount: 0.5 * factor, unit: "teaspoon", name: "cumin" },
];

console.log(ingredients);

function addingData() {
  let tableBody = document.getElementById("data");
  tableBody.innerHTML = "";
  let tr = "";
  ingredients.forEach((element) => {
    console.log(element.amount);
    tr += "<tr>";
    tr +=
      "<td>" +
      element.amount +
      "</td>" +
      "<td>" +
      element.unit +
      "</td>" +
      "<td>" +
      element.name +
      "</td>";
    tr += "</tr>";
  });
  tableBody.innerHTML += tr;
}
