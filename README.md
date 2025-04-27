# DID
**System Description: Decentralized Authentication (DID Authentication API)**
This system allows users to authenticate using a decentralized identity (DID). Unlike traditional systems, cryptographic keys and digital signatures are used instead of usernames/passwords.

1) _**General Architecture**_
**Frontend (React / Next.js)** → User interface
**Backend (Node.js / Express.js)** → API operations
**Blockchain / DID Service (Ethereum, DID:Ethr)** → Authentication

2) Technologies and Methods Used**_
**Component:** Frontend (UI) **Technology Used:** React.js / Next.js      **Description:** User interface
**Component:** Backend (API) **Technology Used:** Node.js / Express.js    **Description:** API services
**Component:** Blockchain    **Technology Used:** Ethers. js (Ethereum)   **Description:** DID generation and validation
**Component:** Data Storage  **Used Technology:** JSON Web Token (JWT)    **Description:** Token system for authentication
**Component:** Encryption    **Used Technology:** Elliptic Curve Cryptography (ECC) **Description:** Private & Public key usage
**Component:** QR Code Generation **Used Technology:** qrcode npm package           **Description:** Sharing DID with QR code

3) _**User Interface (UI)**_
**The main sections of the interface:**
1) DID Creation & Display
2) Authentication (Message signing & verification)
3) Login with QR Code

4)_**User Interface - Form Fields**_
**Field:** DID Address **Description:** The user's DID ID
**Field:** Message     **Description:** The data that the user will sign
**Field:** Signature   **Description:** The digital signature with which the user signs the message
**Field:** Status      **Description:** Was the verification successful?

5)_**Backend API Endpoints**_
**Endpoint:** /generate-did **Description:** Creates a new DID
**Endpoint:** /sign-message **Description:** Allows the user to sign the message
**Endpoint:** /verify **Description:** Verifies the sent signature
**Endpoint:** /get-qr **Description:** Returns the DID ID in QR code format

6)_**Summary**_
a. We have completed DID creation, message signing and verification.
b. We have provided Node.js (Backend) and React.js (Frontend) integration.
c. We have considered identity sharing with QR code.

On top of this basic system, extra features such as JWT token integration, decentralized data storage, zk-SNARK based secret authentication can be added.
