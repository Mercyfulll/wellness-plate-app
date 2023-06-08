function wellnessPlate(){
   let score = 0
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
    if (name !== ''){
    return typeof name === 'string' && name.trim() !== '' &&  name.toLowerCase()
    }
    if(email !== ''){
      return email 
    }
  }
  function points(score){
    if(score === 1){
      score += 1
    }
    if(score === 2){
      score += 2
    }
    if(score === 3){
      score += 3
    }
  }
  function getPoints(){
    return score
  }
    return{
     validateTexts,
     points,
     getPoints,
     radarScore,

  }
}