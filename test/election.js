var Election = artifacts.require("./election.sol");

contract("Election",function(accounts){
    var electionInstance;
    var candidateId;
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

    // checking if the vote is incremented or the voter has been marked as voted:

    it("Allows a voter to cast a vote", function(){
        return Election.deployed().then(function(instance){
            electionInstance = instance;
            candidateId = 1;
            return electionInstance.vote(candidateId,{from: accounts[0]});
        }).then(function(receipt){
            return electionInstance.voters(accounts[0]);
        }).then(function(voted){
            assert(voted,"Voter has been marked as voted");
            return electionInstance.candidates(candidateId);
        }).then(function(candidate){
            var voteCount = candidate[2];
            assert.equal(voteCount , 1,"increments the candidate's vote count");
        })
    });

    //


});