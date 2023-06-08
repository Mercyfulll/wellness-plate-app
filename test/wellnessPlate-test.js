describe("The WellnessPlate function", function () {
  it("should input a valid name ", function () {
    var wellnessP = wellnessPlate();
    assert.equal(wellnessP.validateName("Londeka"), "londeka");
    assert.equal(wellnessP.validateName("25Lon"), "");
    assert.equal(wellnessP.validateName("Kly!"), "");
  });

  it("should input a valid email", function () {
    var wellnessP = wellnessPlate();

    assert.equal(wellnessP.validateEmail("londa@gmail.com"), true);
    assert.equal(wellnessP.validateEmail("londa @gmail. com"), false);
    assert.equal(wellnessP.validateEmail("londe43w@@gmail.com"), false);
    assert.equal(wellnessP.validateEmail("londekazikalala@gmail..com"), false);

    /* So the function must check the following 
        1. One @ symbol must come after a name and no space in between 
        2. a dot must come after a host name, no spaces as well and only one dot
        3. It must end with a domain, no special characters
    */
  });

  it("should check that the QR code has valid information to identify the test", function () {
    var wellnessP = wellnessPlate();
    /*How do you write a code for QR codes?*/
  });

  it("should verify that the QR code is valid valid", function () {
    var wellnessP = wellnessPlate();
    /*How do you write a code for QR codes?*/
  });
});

it("should verify that the QR code is valid valid", function () {
  var wellnessP = wellnessPlate();
  /*How do you write a code for QR codes?*/
});

describe("The mental health Test", function () {
  it("should initialize the mental health test", function () {
    var wellnessP = wellnessPlate();

    assert.equal(wellnessP.initializeTest(), true);
    /* The test initializes after the terms and conditions button is clicked, so this is dom related. 
            this function is just a variable being true?*/
  });

  it("should record User answers  correctly ", function () {
    var wellnessP = wellnessPlate();
    let test = {
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
    var selectedAnswer = test.answers[0].a;

    assert.equal(wellnessP.getUserAnswer(selectedAnswer), "a");
  });

  it("should calculate the user score  correctly", function () {
    var wellnessP = wellnessPlate();
    /*The user score 45 in total and each question has 3 possible answers. a = 3 , b = 2, c = 1*/
    let test = {
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

    var userAnswers = [
      "a",
      "b",
      "c",
      "b",
      "a",
      "c",
      "a",
      "c",
      "b",
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
    ];

    var userScore = wellnessP.getTotalScore(test, userAnswers);

    assert.deepEqual(userScore, 30);
  });

  it("should assign a user to a category based on the score", function () {
    var wellnessP = wellnessPlate();
    /* If 1-15 >> low level stress and favorible mood
            If 16-30>> moderate stress levels
            31-45 >> high stress levels must see doctor*/
  });

  it("should print User results along with their category", function () {
    var wellnessP = wellnessPlate();
    assert.equal(
      wellnessP.stressRadar(10),
      "You have low level stress and favorable mood"
    );
    assert.equal(
      wellnessP.stressRadar(15),
      "You have low level stress and favorable mood"
    );
    assert.equal(wellnessP.stressRadar(16), "You have moderate level stress");
    assert.equal(wellnessP.stressRadar(25), "You have moderate level stress");
    assert.equal(
      wellnessP.stressRadar(40),
      "You have high stress levels, please seek medical advise before undertaking the diet."
    );
    assert.equal(
      wellnessP.stressRadar(45),
      "You have high stress levels, please seek medical advise before undertaking the diet."
    );
  });
});

describe("The Mental Health Diet", function () {
  it("should allow a user to fill personalization ", function () {
    var wellnessP = wellnessPlate();
  });

  it("should generate a mental health diet based on the User personalization and category score", function () {
    var wellnessP = wellnessPlate();
  });
});

describe("The Error messages", function () {
  it('should give the error "Enter a valid email" when an invalid email is entered', function () {
    var wellnessP = wellnessPlate();
  });
  it('should give the error "Select an answer" when a user does not select an answer', function () {
    var wellnessP = wellnessPlate();
  });
  it('should give the error "Please rescan the QR Code" when a user fails to scan the QR code correctly', function () {
    var wellnessP = wellnessPlate();
  });

  describe("The points function", function () {
    it("It should add points to get total scoring", function () {
      let wellnessP = wellnessPlate();
      wellnessP.points(3);
      wellnessP.points(1);
      assert.equal(4, wellnessP.getPoints());
    });
  });
});
