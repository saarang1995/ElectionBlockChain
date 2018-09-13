pragma solidity ^0.4.24;

contract Election {
    //Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    //Store Candidates 
    //Fetch Candidate

    /** 
    (using mapping function -> which is solidity function just like any
     other language's key-map function)
    **/

    mapping(uint => Candidate) public candidates;        //soring and fetching
    
    /**
    the above will add a candidate to the mapping, which will change the state
     of the Contract and writing to the blockchain. This will be interacting with
     the data layer of the blockchain.
    **/

    //Store Candidates Count
    uint public candidateCount;


    constructor() public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");

    }

    function addCandidate(string _name) private {       // made it private so that only the contract can add the candidate
        candidateCount ++;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }
}