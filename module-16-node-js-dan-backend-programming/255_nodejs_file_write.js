// Menulis Berkas Baru ke Disk Menggunakan fs.writeFile
const fs = require('node:fs');
const path = require('node:path');

const targetFile = path.join(__dirname, 'output_tulis.txt');
const dataTulis = "Laporan Log Sistem: Berhasil dibuat pada " + new Date().toISOString();

fs.writeFile(targetFile, dataTulis, 'utf8', (err) => {
  if (err) {
    return console.error("Gagal menulis file:", err);
  }
  console.log("=== Menulis File Berhasil ===");
  console.log("File disimpan di :", targetFile);
  console.log("Ukuran file baru :", fs.statSync(targetFile).size, "bytes");

  // Pembersihan file setelah demonstrasi
  fs.unlinkSync(targetFile);
});
