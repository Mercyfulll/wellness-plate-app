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

function validateName(name){
    const regex = /^[a-zA-Z ]+$/;
    if(typeof name === 'string' && name.trim() !== "" && regex.test(name.trim())) {
        return name.toLowerCase();
    }
    else {
        return "";
    }
}

return{
validateName
}

}