// File System API Lanjutan: Memeriksa Keberadaan (exists), Status (stat), dan Membuat Direktori
const fs = require('node:fs');
const path = require('node:path');

const folderDemo = path.join(__dirname, 'temp_demo_dir');

// Membuat direktori baru jika belum ada
if (!fs.existsSync(folderDemo)) {
  fs.mkdirSync(folderDemo);
  console.log("Direktori berhasil dibuat:", folderDemo);
}

// Memeriksa status direktori
const status = fs.statSync(folderDemo);
console.log("Apakah folderDemo adalah direktori?", status.isDirectory());

// Hapus kembali folder sementara
fs.rmdirSync(folderDemo);
console.log("Direktori sementara berhasil dibersihkan.");
