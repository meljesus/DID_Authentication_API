app.post("/sign-message", async (req, res) => { const { privateKey, message } = req.body;     
const wallet = new ethers.Wallet(privateKey);     
const signature = await wallet.signMessage(message);     
res.json({ signature }); });

/*
This function allows the user to sign a message with their private key.
a. Receives the private key and message from the user.
b. Signs the message and returns a cryptographic signature.
*/
