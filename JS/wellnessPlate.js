function wellnessPlate() {
  var test = {
    qrCode: "#",
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
  };
  var hasTestInitialized = false;
  let validName;
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
  let validEmail;
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
  function totalScore() {}

  return {
    validateName,
    validateEmail,
    initializeTest,
    totalScore,
    errorMsg,
  };
}
