app.post("/verify", (req, res) => { const { message, signature, did } 
= req.body; const recoveredAddress 
= ethers.utils.verifyMessage(message, signature);  
if (recoveredAddress.toLowerCase() 
    === did.split(":")[2].toLowerCase()) 
{  res.json({  erified: true, message: "Kimlik doğrulandı!" });} 

else { res.json({ verified: false, message: "Doğrulama başarısız!" });     } });

/*
Verifies the signature sent by the user
a. Receives the user's signed message
b. Verifies the signature and checks if it really belongs to that DID
*/
