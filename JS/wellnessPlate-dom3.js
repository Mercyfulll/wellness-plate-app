const scoreDisplay = document.querySelector(".points");
const message = document.querySelector(".msg");
let scoreInput = JSON.parse(localStorage.getItem("Scoring")) || 0;

const wellnessP = wellnessPlate(scoreInput);

scoreDisplay.innerHTML = localStorage.getItem("Scoring") || 0;
// scoreDisplay.innerHTML = 12;
var score = localStorage.getItem("Scoring");
// var score = 12;
let currentQRCodeImg;
if (score >= 1 && score <= 10) {
  currentQRCodeImg = "../pdf/stress1.png";
  document.querySelector(".qr-code-img").setAttribute("src", currentQRCodeImg);
  message.innerHTML =
    "Your stress result indicates that you have Low Stress Levels. Please scan the QR code to receive a Mental Wellness Nutrition Brochure(The Ketogenic Diet) with detailed steps on how to maintain mental health.";
} else if (score >= 11 && score <= 20) {
  currentQRCodeImg = "../pdf/stress2.png";
  document.querySelector(".qr-code-img").setAttribute("src", currentQRCodeImg);
  message.innerHTML =
    "Your stress result indicates that you have Moderate Stress Levels. Please scan the QR code to receive a Mental Wellness Nutrition Brochure(The Anti Inflammatory Diet) with detailed steps on how to  maintain mental health.";
} else if (score >= 21 && score <= 30) {
  currentQRCodeImg = "../pdf/stress3.png";
  document.querySelector(".qr-code-img").setAttribute("src", currentQRCodeImg);
  message.innerHTML =
    "Your stress result indicates that you have High Stress Levels. Please seek medical counsel and if you are overwhelmed please utilize the SA Suicide Crisis Line : 0800 567 567. Scan the QR code to receive a Mental Wellness Nutrition Brochure(The DASH Diet) with detailed steps on how to maintain mental health.";
}
