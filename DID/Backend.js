const express = require("express"); 
const ethers = require("ethers"); 
const app = express(); app.use(express.json()); 

app.get("/generate-did", (req, res) => {     const wallet =  ethers.Wallet.createRandom();     
const did = `did:ethr:${wallet.address}`;     
res.json({ did, publicKey: wallet.publicKey, privateKey: wallet.privateKey }); }); 
app.listen(3000, () => console.log("Server running on port 3000"));

/*
Create a new DID
We generate an Ethereum-based DID for the user.
creating a random wallet for Ethereum.
setting the address of the wallet as the DID.
*/
