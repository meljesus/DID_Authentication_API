import { useState } from "react"; 
export default function DIDAuth() {     const [did, setDid] = useState("");     
const [message, setMessage] = useState("Bu benim kimliğim!"); 
const [signature, setSignature] = useState("");     
const generateDID = async () => { const res = await fetch("http://localhost:3000/generate-did"); const data = await res.json(); 
setDid(data.did);     }; 
const signMessage = async () => { const res = await fetch("http://localhost:3000/sign-message", {
method: "POST", 
headers: { "Content-Type": "application/json" }, 
body: JSON.stringify({ message,  
privateKey: "Kullanıcının özel anahtarı" }), }); 
const data = await res.json();  
setSignature(data.signature); }; 
return ( <div> <button onClick={generateDID}>DID  
Oluştur</button> <p>DID: {did}</p> <button onClick={signMessage}>
Mesajı İmzala</button><p>
İmza: {signature}</p> </div> ); }

/*
Kullanıcı arayüzü, DID oluşturma, imzalama ve doğrulama işlemlerini yapacak.
a. Kullanıcı için DID oluşturuyor.
b. Kullanıcının bir mesajı özel anahtarla imzalamasını sağlıyor.
*/
