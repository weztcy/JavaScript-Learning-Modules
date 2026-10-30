// Membaca Berkas (File) Menggunakan Modul Bawaan 'node:fs'
const fs = require('node:fs');
const path = require('node:path');

// Membuat file dummy sementara untuk didemonstrasikan pembacaannya
const dummyPath = path.join(__dirname, 'contoh_baca.txt');
fs.writeFileSync(dummyPath, "Ini adalah teks pembelajaran membaca file di Node.js.", 'utf8');

// Membaca isi file secara asynchronous
fs.readFile(dummyPath, 'utf8', (err, isiData) => {
  if (err) {
    return console.error("Gagal membaca file:", err);
  }
  console.log("=== Berhasil Membaca File ===");
  console.log("Isi Konten:", isiData);

  // Bersihkan file sementara
  fs.unlinkSync(dummyPath);
});
