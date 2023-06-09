const nextBtton = document.querySelector(".next");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const errorTxtEle = document.querySelector(".error-text");
const scoreDisplay = document.querySelector(".points");
let scoreInput = JSON.parse(localStorage.getItem("Scoring")) || 0;
const message = document.querySelector(".msg");

const wellnessP = wellnessPlate(scoreInput);

nextBtton.addEventListener("click", function () {
  var rad = document.querySelector("input[name='question']:checked");
  if (rad.checked === true) {
    wellnessP.points(Number(rad.value));
    localStorage.setItem("Scoring", wellnessP.getPoints());
    total = wellnessP.getPoints();
    var x = localStorage.getItem("Scoring");
  }
});
