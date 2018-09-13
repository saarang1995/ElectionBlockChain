# Electing candidates by building the smart contract using Truffle Framework (Etherium Blockchain)  

Candidate election business logic written in Solidity. Running on Blockchain as a smart contract. 

Technologies and setup steps:

1. install truffle
```
-> npm install -g truffle.

```
(Gives us suite of tools for writing smart contracts in solidity language)

2. install ganache
-> from truffleframework.com

(Local in memory blackchain for development purposes)

3. Add 'metamask' extension to the chrome browser.
-> from metamask.io
> Metamask makes our browser to connect to the blockchain.

(Will allow us to connect to the blockchain network)

4. Add Solidity language package in the code Editor: Visual Studio code.


# Note
For cleaner project repository I have excluded node_modules. Please run "npm install" when you download the Electionblockchain project.


# Tests

Running tests for checking if the blockchain is bug free, this is required because bugs will cost a fortune to the clients as they pay ethers for usage.

The tests are the simulation of the client side interaction hence written in Javascript.
(Truffle comes with Mocha and Chai as a testing frameworks).

Both the frameworks are used in the election.js file. 
"It" -> from the Mocha
"Assert" -> from the Chai

Process: create a election.js file in a test directory -> command touch test/election.js
Once done -> run truffle test
Below should be the result (If Successful):
 
 _Contract: Election
  _  ✓ instialized with 2 candidates
  _1 passing (61ms)
  
  
  
  # Run the Client-side application
  
  Finally After putting some front end code (HTML and JS)
  
  Run the client side application by running the command
  ```
  npm run dev
```
##  Wait What????
###  It isn't doing anything. 
###  This is because we forgot to configure **Metamask**.

## Setting up Metamask:
1. Click on the extension on your browser.
2. Accept the license agreement.
3. Enter a new password.
4. Save the text (Seed Phrase) that the extension shows, which will help you in future if you loose the password.
5. By default the metmask connects us to the main Etherium network.
6. Change it to the Custom RPC 
7. Paste the RPC url from the Ganache and click save.
8. Now you can see the Account with which you are connected and the Candidate names.


