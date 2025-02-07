app.post("/verify", (req, res) => { const { message, signature, did } 
= req.body; const recoveredAddress 
= ethers.utils.verifyMessage(message, signature);  
if (recoveredAddress.toLowerCase() 
    === did.split(":")[2].toLowerCase()) 
{  res.json({  erified: true, message: "Kimlik doğrulandı!" });} 

else { res.json({ verified: false, message: "Doğrulama başarısız!" });     } });
