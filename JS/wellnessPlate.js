function wellnessPlate(){
    var theQRCode = "#" ;
var test = {
    questions:[
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
        "q15"
],
answers:[
    {'a': 3,
    'b':2,
    'c':1}
]
}
var hasTestInitialized = false;


function validateName(name){
    const regex = /^[a-zA-Z ]+$/;
    if(typeof name === 'string' && name.trim() !== "" && regex.test(name.trim())) {
        return name.toLowerCase();
    }

    else {
        return "";
    }
}
function validateEmail(email) {
    if (typeof email !== 'string' || email.trim() === '') {
      return false;
    }
    //only did poin 1
}

function initializeTest(){
   return hasTestInitialized = true;
}

function getUserAnswer(selectedAnswer){
    if (selectedAnswer === test.answers[0].a) {
        return 'a';
      } else if (selectedAnswer === test.answers[0].b) {
        return 'b';
      } else if (selectedAnswer === test.answers[0].c) {
        return 'c';
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
          return 'You have low level stress and favorable mood';
        } else if (score >= 16 && score <= 30) {
          return 'You have moderate level stress';
        } else if (score >= 31 && score <= 45) {
          return 'You have high stress levels, please seek medical advise before undertaking the diet.';
        }
    }

    function validationErrorMessages(){

    }

    function testErrorMessages(){

    }

    function generalErrorMessages(){

    }

return{
validateName,
validateEmail,
getUserAnswer,
initializeTest,
getTotalScore,
stressRadar,
validationErrorMessages,
testErrorMessages,
generalErrorMessages


}
}