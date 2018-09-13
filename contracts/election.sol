pragma solidity ^0.4.24;

contract Election {
    //Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

   // Voted Event:

    event votedEvent(uint indexed _candidateId);

     
   // Sore Voter accounts who have voted:(So that they cannot vote again)

    mapping(address => bool) public voters;
    /** 
    Store Candidates 
    Fetch Candidate
    (using mapping function -> which is solidity function just like any
     other language's key-map function)
    **/

    mapping(uint => Candidate) public candidates;      //storing and fetching
    
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

    // Incrementing the vote count for the Candidate:

    function vote( uint _candidateId) public{
        // Check if the Voter has voted before

        require(        // in solidity, if the require statement is true only then the code is executed further
            !voters[msg.sender],
            "Sender has already voted");  

        // checking if the voter is voting for the correct candidate:

        require(
            _candidateId > 0 && _candidateId <= candidateCount,
            "Wrong candidate for voting has been used");  


        // we will use msg -> which is passed along as a meta deta when calling the function. 
        voters[msg.sender] = true;

        // update Candidate Vote Count
        candidates[_candidateId].voteCount ++;

        //trigger the voted event:
        emit votedEvent(_candidateId);
    }
}