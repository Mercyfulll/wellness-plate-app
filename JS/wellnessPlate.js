function wellnessPlate(){
var test = {
    qrCode:"#" ,
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
    hasTestInitialized = true;
}

    function totalScore(){

    }


return{
validateName,
validateEmail,
initializeTest,
totalScore,


}

}