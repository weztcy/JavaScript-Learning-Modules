// Modul 'node:os': Mengambil Informasi Sistem Operasi dan Perangkat Keras
const os = require('node:os');

console.log("=== Informasi Sistem Operasi ===");
console.log("Arsitektur CPU :", os.arch());
console.log("Tipe OS        :", os.type());
console.log("Waktu Aktif    :", (os.uptime() / 3600).toFixed(2), "jam");
console.log("Total RAM      :", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("RAM Bebas      :", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Jumlah Core CPU:", os.cpus().length);
