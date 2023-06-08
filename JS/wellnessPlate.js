function wellnessPlate() {
  let validName, validEmail;
  var theQRCode = "#";
  var test = {
    questions: [
      "q1",
      "q2",
      "q3",
      "q4",
      "q5",
      "q6",
      "q7",
      "q8",
      "q9",
      "q10",
      "q11",
      "q12",
      "q13",
      "q14",
      "q15",
    ],
    answers: [{ a: 3, b: 2, c: 1 }],
  };

  var hasTestInitialized = false;

  function validateName(name) {
    const regex = /^[a-zA-Z ]+$/;
    if (
      typeof name === "string" &&
      name.trim() !== "" &&
      regex.test(name.trim())
    ) {
      validName = name.toLowerCase();
      return validName;
    } else {
      return "";
    }
  }
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    validEmail = re.test(String(email).toLowerCase());
    return validEmail;
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

  function stressRadar(score) {
    if (score >= 1 && score <= 15) {
      return "You have low level stress and favorable mood";
    } else if (score >= 16 && score <= 30) {
      return "You have moderate level stress";
    } else if (score >= 31 && score <= 45) {
      return "You have high stress levels, please seek medical advise before undertaking the diet.";
    }
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
  };
}
