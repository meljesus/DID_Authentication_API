app.post("/sign-message", async (req, res) => { const { privateKey, message } = req.body;     
const wallet = new ethers.Wallet(privateKey);     
const signature = await wallet.signMessage(message);     
res.json({ signature }); });

/*
Bu fonksiyon, kullanıcının bir mesajı özel anahtarıyla imzalamasını sağlar.
a. Kullanıcıdan özel anahtar ve mesaj alıyor.
b. Mesajı imzalayıp kriptografik imza döndürüyor.
*/
