// Modul 'node:path': Manipulasi dan Normalisasi Path Direktori / Berkas Lintas Platform
const path = require('node:path');

const contohPath = "/user/proyek/backend/server.js";

console.log("=== Utilitas Path Node.js ===");
console.log("Direktori Induk (dirname) :", path.dirname(contohPath));
console.log("Nama File (basename)       :", path.basename(contohPath));
console.log("Ekstensi (extname)         :", path.extname(contohPath));
console.log("Menggabungkan Path (join)  :", path.join("proyek", "src", "index.js"));
console.log("Path Absolut (resolve)     :", path.resolve("src", "app.js"));
