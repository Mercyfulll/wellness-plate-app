function wellnessPlate(scoreInput) {
  let score = scoreInput || 0;

  function stressRadar(score) {
    if (score >= 1 && score <= 10) {
      return "Your stress result indicates that you have  Low Stress Levels. Please scan the QR code to receive a Mental Wellness Nutrition Brochure(The Ketogenic Diet) with detailed steps on how to maintain mental health.";
      //lsl
    } else if (score >= 11 && score <= 20) {
      return "Your stress result indicates that you have Moderate Stress Levels. Please scan the QR code to receive a Mental Wellness Nutrition Brochure(The Anti Inflammatory Diet) with detailed steps on how to  maintain mental health.";
      //msl
    } else if (score >= 21 && score <= 30) {
      return "Your stress result indicates that you have High Stress Levels. Please seek medical counsel and if you are overwhelmed please utilize the SA Suicide Crisis Line : 0800 567 567. Scan the QR code to receive a Mental Wellness Nutrition Brochure(The DASH Diet) with detailed steps on how to maintain mental health.";
      //hsl
    }
  }

  function points(scoreinput) {
    if (scoreinput === 1) {
      score += 1;
    }
    if (scoreinput === 2) {
      score += 2;
    }
    if (scoreinput === 3) {
      score += 3;
    }
  }
  function getPoints() {
    return score;
  }
  return {
    stressRadar,
    points,
    getPoints,
  };
}
