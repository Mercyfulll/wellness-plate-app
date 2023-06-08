const takeButton = document.querySelector(".btn-hero");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const errorTxtEle = document.querySelector(".error-text");
const wellnessP = wellnessPlate();

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

/* ----- EVENT LISTENERS ----- */
takeButton.addEventListener("click", testBtnFunction);
