var Election = artifacts.require("./election.sol");

contract("Election",function(accounts){
    var electionInstance;
    //Mocha Framework:
    //testing if the count of the candidate is 2
    it("instializes with two candidates",function(){
        return Election.deployed().then(function(instance){
            return instance.candidateCount();
        }).then(function(count){
            // checking if the count = 2 using Chai Framework:
            assert.equal(count,2);
        });
    });

        //checking other details (Name, id, Vote Count )

    it("Initializes the candidates with correct values",function(){
        return Election.deployed().then(function(instance){
            electionInstance = instance;

            return electionInstance.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate[0],             1, "Contains the Correct Id");
            assert.equal(candidate[1], "Candidate 1", "Contains the correct name");
            assert.equal(candidate[2],             0, "Contains the correct vote count");
            return electionInstance.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate[0],             2, "Contains the Correct Id");
            assert.equal(candidate[1], "Candidate 2", "Contains the correct name");
            assert.equal(candidate[2],             0, "Contains the correct vote count");
        });
    });


});