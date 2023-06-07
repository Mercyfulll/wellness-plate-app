describe('The WellnessPlate function', function(){
    it('should input a valid name ', function(){
        var wellnessP = wellnessPlate();
        assert.equal(wellnessP.validateName('Londeka'), 'londeka')
        assert.equal(wellnessP.validateName('25Lon'), '')
        assert.equal(wellnessP.validateName('Kly!'), '')
    })

    it('should input a valid email', function(){
        var wellnessP = wellnessPlate();

        assert.equal(wellnessP.validateEmail('londa@gmail.com'), true)
        assert.equal(wellnessP.validateEmail('londa @gmail. com'), false)
        assert.equal(wellnessP.validateEmail('londe43w@@gmail.com'), false)
        assert.equal(wellnessP.validateEmail('londekazikalala@gmail..com'), false)

        /* So the function must check the following 
        1. One @ symbol must come after a name and no space in between 
        2. a dot must come after a host name, no spaces as well and only one dot
        3. It must end with a domain, no special characters
    */
    })
    
    

    it('should check that the QR code has valid information to identify the test', function(){
        var wellnessP = wellnessPlate();

        /*How do you write a code for QR codes?*/
    })
    

    it('should verify that the QR code is valid valid', function(){
        var wellnessP = wellnessPlate();
         /*How do you write a code for QR codes?*/
    })
    })
    
    describe('The mental health Test', function(){
        it('should initialize the mental health test', function(){
            var wellnessP = wellnessPlate();
            /* The test initializes after the terms and conditions button is clicked, so this is dom related. 
            this function is just a variable being true? */
        })
    
         it('should record User answers  correctly ', function(){
            var wellnessP = wellnessPlate();
        })
    
         it('should calculate the user score  correctly', function(){
            var wellnessP = wellnessPlate();
        })
         it('should assign a user to a category based on the score', function(){
            var wellnessP = wellnessPlate();
        })
    
         it('should print User results along with their category', function(){
            var wellnessP = wellnessPlate();
        })
    
    })
    
    describe('The Mental Health Diet', function(){
         it('should allow a user to fill personalization ', function(){
            var wellnessP = wellnessPlate();
        })
    
         it('should generate a mental health diet based on the User personalization and category score', function(){
            var wellnessP = wellnessPlate();
        })
    })