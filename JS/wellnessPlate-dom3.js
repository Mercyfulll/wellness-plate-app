const scoreDisplay = document.querySelector(".points")
const message = document.querySelector(".msg")
let scoreInput = JSON.parse(localStorage.getItem("Scoring")) || 0;

const wellnessP = wellnessPlate(scoreInput)

scoreDisplay.innerHTML = localStorage.getItem("Scoring") || 0
var score = localStorage.getItem("Scoring")
message.innerHTML = wellnessP.stressRadar(localStorage.getItem("Scoring"))


if (score >= 1 && score <= 10) {
  var img = document.createElement("img");
  img.src = "../pdf/lsl.png";
  img.setAttribute("style", "width: 150px;")

  var div = document.querySelector(".qr-code-display");
  div.appendChild(img);
  //block.setAttribute("style", "text-align:center");

  //lsl
} else if (score >= 11 && score <= 20) {
  var img = document.createElement("img");
  img.src = "../pdf/msl.png";
  img.setAttribute("style", "width: 150px;")

  var div = document.querySelector(".qr-code-display");
  div.appendChild(img);
  //msl
} else if (score >= 21 && score <= 30) {
  var img = document.createElement("img");
  img.src = "../pdf/hsl.png";
  img.setAttribute("style", "width: 150px;");


  var div = document.querySelector(".qr-code-display");
  div.appendChild(img);
  //hsl
}
