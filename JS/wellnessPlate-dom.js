const takeButton = document.querySelector(".btn-hero");
const nextBtton = document.querySelector(".next");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const errorTxtEle = document.querySelector(".error-text");
let scoreInput = JSON.parse(localStorage.getItem("Scoring")) || 0;
const wellnessP = wellnessPlate(scoreInput);

// localStorage.setItem("Scoring") || 0;

// Take button should redirect User to a disclaimer screen with QR code

/* ----- FUNCTIONS -----*/
function testBtnFunction() {
  wellnessP.validateName(inputName.value);
  wellnessP.validateEmail(inputEmail.value);
  if (!wellnessP.errorMsg()) {
    window.location = "/html/disclaimer.html";
  } else {
    errorTxtEle.innerHTML = wellnessP.errorMsg();
    setTimeout(function () {
      errorTxtEle.innerHTML = "";
    }, 3000);
  }
  inputName.value = "";
  inputEmail.value = "";
}

function nextBttonFunction() {
  var rad = document.querySelector("input[name='question']:checked");
  if (rad.checked === true) {
    wellnessP.points(Number(rad.value)); // increments the counter.
    localStorage.setItem("Scoring", wellnessP.getPoints());
  }
}

/* ----- EVENT LISTENERS ----- */
nextBtton.addEventListener("click", nextBttonFunction);
// takeButton.addEventListener("click", testBtnFunction);
