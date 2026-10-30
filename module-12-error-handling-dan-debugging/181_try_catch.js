// Blok try...catch menangkap exception saat runtime agar program tidak crash tiba-tiba

console.log("Memulai eksekusi kode berisiko...");

try {
  // Operasi berisiko: memanggil variabel yang belum didefinisikan
  const hasil = angkaTidakDikenal * 2;
  console.log("Hasil:", hasil);
} catch (error) {
  // Blok catch menangkap error dan mengizinkan penanganan yang anggun
  console.log("[TERTANGKAP]: Terjadi kesalahan saat komputasi.");
  console.log("Nama Error :", error.name);
  console.log("Pesan Error:", error.message);
}

console.log("Program tetap berjalan normal setelah menangani error.");
