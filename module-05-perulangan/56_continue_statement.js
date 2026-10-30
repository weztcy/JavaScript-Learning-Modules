// Pernyataan 'continue' melewati sisa perintah iterasi saat ini
// dan langsung melanjutkan ke iterasi perulangan berikutnya

console.log("=== Menampilkan Hanya Angka Ganjil (Melewati Genap) ===");

for (let i = 1; i <= 8; i++) {
  if (i % 2 === 0) {
    // Lewati angka genap
    continue;
  }
  console.log("Angka ganjil ditemukan:", i);
}
