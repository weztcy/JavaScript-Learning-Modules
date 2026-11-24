// CommonJS (CJS): Standar modul tradisional Node.js menggunakan fungsi require()

// Mengimpor modul inti bawaan Node.js
const os = require('os');
const path = require('path');

console.log("=== CommonJS require() ===");
console.log("Platform Sistem :", os.platform());
console.log("Pemisah Path OS :", path.sep);
console.log("Arsitektur CPU  :", os.arch());
