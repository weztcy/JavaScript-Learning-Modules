// Modul 'node:crypto': Enkripsi, Hashing, dan Pembuatan Token Acak Aman
const crypto = require('node:crypto');

console.log("=== Keamanan Kriptografi Node.js ===");

// 1. Membuat Hash SHA-256
const teksRahasia = "KataSandiPengguna123";
const hash = crypto.createHash('sha256').update(teksRahasia).digest('hex');
console.log("SHA-256 Hash :", hash);

// 2. Membuat Token Acak (Random Bytes)
const tokenSesi = crypto.randomBytes(16).toString('hex');
console.log("Token Acak   :", tokenSesi);
