import { useState } from "react"; 
export default function DIDAuth() {     const [did, setDid] = useState("");     
const [message, setMessage] = useState("This is my identity!"); 
const [signature, setSignature] = useState("");     
const generateDID = async () => { const res = await fetch("http://localhost:3000/generate-did"); const data = await res.json(); 
setDid(data.did);     }; 
const signMessage = async () => { const res = await fetch("http://localhost:3000/sign-message", {
method: "POST", 
headers: { "Content-Type": "application/json" }, 
body: JSON.stringify({ message,  
privateKey: "User's private key" }), }); 
const data = await res.json();  
setSignature(data.signature); }; 
return ( <div> <button onClick={generateDID}>DID  
Create</button> <p>DID: {did}</p> <button onClick={signMessage}>
signature</button><p>
signature: {signature}</p> </div> ); }

/*
The user interface will handle DID creation, signing and verification
a. Creates a DID for the usr
b. Allows the user to sign a message with a private key
*/
