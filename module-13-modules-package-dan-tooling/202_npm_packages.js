// Penggunaan Paket dari Registry NPM (Node Package Manager)

console.log("=== Pemanfaatan NPM Package ===");
console.log("1. 'npm install <nama-paket>' mengunduh paket ke folder node_modules.");
console.log("2. Menambahkan nama dependensi ke package.json.");
console.log("3. Mengimpor paket menggunakan require() atau import.");

// Memeriksa ketersediaan modul express yang telah diinstall
try {
  const express = require('express');
  console.log("Status: Paket 'express' terdeteksi dan siap digunakan (tipe:", typeof express + ").");
} catch (e) {
  console.log("Paket express belum diinstall.");
}
