// Memahami dan Mengonfigurasi NPM Scripts untuk Otomasi Tugas

const skripProyek = {
  "build": "babel src -d dist",
  "lint": "eslint . --ext .js",
  "test": "node --test",
  "format": "prettier --write ."
};

console.log("=== Daftar NPM Scripts Standar ===");
for (const [namaSkrip, perintah] of Object.entries(skripProyek)) {
  console.log("npm run " + namaSkrip.padEnd(8) + "-> " + perintah);
}
console.log("\nSkrip ini mempermudah automasi pengujian, format kode, dan build.");
