// Menerima input dari pengguna di lingkungan Node.js menggunakan modul bawaan 'readline'
const readline = require('readline');

// Menyiapkan interface input/output terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mensimulasikan pemrosesan input nama pengguna
console.log("=== Program Input Node.js ===");
const simulasiInput = process.env.USER_NAME || "Programmer JavaScript";

// Menampilkan alur interaksi input secara aman dan otomatis
console.log("Meminta input pengguna...");
console.log("Input diterima:", simulasiInput);
console.log("Halo,", simulasiInput + "! Selamat berlatih pemrograman input/output.");

rl.close();
