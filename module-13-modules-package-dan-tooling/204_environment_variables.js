// Membaca Variabel Lingkungan (Environment Variables) melalui process.env

// Mengatur nilai fallback jika env variable belum didefinisikan di sistem operasi
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";
const APP_NAME = process.env.APP_NAME || "ModulJavaScript";

console.log("=== Konfigurasi Environment Variables (process.env) ===");
console.log("Nama Aplikasi :", APP_NAME);
console.log("Port Berjalan :", PORT);
console.log("Mode Runtime  :", NODE_ENV);
console.log("Path Home User:", process.env.USERPROFILE || process.env.HOME || "Tersedia di sistem");
