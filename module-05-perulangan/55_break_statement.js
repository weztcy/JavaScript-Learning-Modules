// Pernyataan 'break' digunakan untuk menghentikan perulangan lebih awal

console.log("=== Mencari Angka Target (7) dalam Perulangan ===");

for (let angka = 1; angka <= 10; angka++) {
  console.log("Memeriksa angka:", angka);
  
  if (angka === 7) {
    console.log("Target 7 ditemukan! Menghentikan loop dengan break.");
    break; // Keluar seketika dari struktur loop for
  }
}

console.log("Proses pencarian selesai.");
