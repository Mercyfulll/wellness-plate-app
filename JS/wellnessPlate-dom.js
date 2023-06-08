const nextBtton = document.querySelector(".next");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const errorTxtEle = document.querySelector(".error-text");
const scoreDisplay = document.querySelector(".points")
let scoreInput = JSON.parse(localStorage.getItem("Scoring")) || 0;
const message = document.querySelector(".msg")

const wellnessP = wellnessPlate(scoreInput);

// localStorage.setItem("Scoring") || 0;


// Take button should redirect User to a disclaimer screen with QR code

/* ----- FUNCTIONS -----*/

/* ----- EVENT LISTENERS ----- */
nextBtton.addEventListener("click",function(){
  var rad = document.querySelector("input[name='question']:checked");
  if (rad.checked === true) {
    wellnessP.points(Number(rad.value)); // increments the counter.
    localStorage.setItem("Scoring", wellnessP.getPoints());
    total = wellnessP.getPoints()
    var x = localStorage.getItem("Scoring")
    scoreDisplay.innerHTML = x
    message.innerHTML = wellnessP.stressRadar(x)
  }

})
