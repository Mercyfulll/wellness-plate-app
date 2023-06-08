function wellnessPlate(){
   
  var test = {
   
    questions:[] 
}

  function initializeTest() {
    hasTestInitialized = true;
  }
  function errorMsg() {
    /* HANDLING INVALID INPUTS */
    if (!validName && !validEmail) {
      return "please enter a valid username and a valid email";
    } else if (!validEmail) {
      return "please enter a valid email";
    } else if (!validName) {
      return "please enter a username";
    }
  }
  function initializeTest() {
    return (hasTestInitialized = true);
  }

  function getUserAnswer(selectedAnswer) {
    if (selectedAnswer === test.answers[0].a) {
      return "a";
    } else if (selectedAnswer === test.answers[0].b) {
      return "b";
    } else if (selectedAnswer === test.answers[0].c) {
      return "c";
    }
  }

  function getTotalScore(test, userAnswers) {
    if (test.questions.length === userAnswers.length) {
      let score = 0;
      for (let i = 0; i < test.questions.length; i++) {
        const answer = userAnswers[i];
        if (answer === "a") {
          score += test.answers[0].a;
        } else if (answer === "b") {
          score += test.answers[0].b;
        } else if (answer === "c") {
          score += test.answers[0].c;
        }
      }
      return score;
    }
  }
  
  return{
  validateTexts,
  }

  function testErrorMessages() {}
  function totalScore() {}
  function generalErrorMessages() {}

  return {
    stressRadar,
    getTotalScore,
    getUserAnswer,
    errorMsg,
    validateName,
    validateEmail,
    initializeTest,
    totalScore,
    testErrorMessages,
    generalErrorMessages,
    // validateTexts,
    points,
    getPoints,
    // radarScore,
  };
}
