function wellnessPlate(){
var test = {
   
    questions:[] 
}

function radarScore() {
    const categoryIndex = Math.floor(test.score / 5);
    const category = test.categories[categoryIndex];
    console.log(`Your score: ${test.score}`);
    console.log(`Category: ${category}`);
  }
  function validateTexts(name,email){
    if (name){
    return typeof name === 'string' && name.trim() !== '' &&  name.toLowerCase()
    }
    if(email){

    }
  }
return{
  validateTexts,
}
}