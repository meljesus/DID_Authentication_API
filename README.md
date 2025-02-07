# DID
**Sistem Tanımı: Merkeziyetsiz Kimlik Doğrulama (DID Authentication API)**
Bu sistem, kullanıcıların merkeziyetsiz kimlik (DID) kullanarak doğrulama yapmasını sağlar. Geleneksel sistemlerden farklı olarak kullanıcı adı/şifre yerine, kriptografik anahtarlar ve dijital imzalar kullanılır.


1) _**Genel Mimarisi**_

**Frontend (React / Next.js)** → Kullanıcı arayüzü

**Backend (Node.js / Express.js)** → API işlemleri

**Blockchain / DID Servisi (Ethereum, DID:Ethr)** → Kimlik doğrulama


2) _**Kullanılan Teknolojiler ve Metotlar**_

**Bileşen:** Frontend (UI)	**Kullanılan Teknoloji:** React.js / Next.js	**Açıklama:** Kullanıcı arayüzü

**Bileşen:** Backend (API)	**Kullanılan Teknoloji:** Node.js / Express.js	**Açıklama:** API hizmetleri

**Bileşen:** Blockchain	**Kullanılan Teknoloji:** Ethers.js (Ethereum)	**Açıklama:** DID oluşturma ve doğrulama

**Bileşen:** Veri Depolama	**Kullanılan Teknoloji:** JSON Web Token (JWT)	**Açıklama:** Kimlik doğrulama için token sistemi

**Bileşen:** Şifreleme	**Kullanılan Teknoloji:** Elliptic Curve Cryptography (ECC)	**Açıklama:** Özel & Genel anahtar kullanımı

**Bileşen:** QR Kod Üretimi	**Kullanılan Teknoloji:** qrcode npm paketi	**Açıklama:** DID’yi QR kod ile paylaşma


3) _**Kullanıcı Arayüzü (UI)**_

**Arayüzde yer alacak ana bölümler:**
1) DID Oluşturma & Gösterme
2) Kimlik Doğrulama (Mesaj imzalama & doğrulama)
3) QR Kod ile giriş yapma


4)_**Kullanıcı Arayüzü - Form Alanları**_

**Alan Adı:** DID Adresi		    **Açıklama:** Kullanıcının DID kimliği

**Alan Adı:** Mesaj (Message)		**Açıklama:** Kullanıcının imzalayacağı veri

**Alan Adı:** İmza (Signature)	**Açıklama:** Kullanıcının mesajı imzaladığı dijital imza

**Alan Adı:** Sonuç (Status)		**Açıklama:** Doğrulama başarılı mı?


5)_**Backend API Endpoint'leri**_

**Endpoint:** /generate-did		**Açıklama:** Yeni bir DID oluşturur

**Endpoint:** /sign-message		**Açıklama:** Kullanıcının mesajı imzalamasını sağlar

**Endpoint:** /verify		      **Açıklama:**  Gönderilen imzayı doğrular

**Endpoint:** /get-qr		      **Açıklama:** DID kimliğini QR kod formatında döndürür


6)_**Özet**_
   
a. DID oluşturma, mesaj imzalama ve doğrulama işlemlerini tamamladık.

b. Node.js (Backend) ve React.js (Frontend) entegrasyonunu sağladık.

c. QR kod ile kimlik paylaşımını düşündük.

Bu temel sistemin üzerine, JWT token entegrasyonu, merkeziyetsiz veri depolama, zk-SNARK tabanlı gizli doğrulama gibi ekstra özellikler eklenebilir. 


