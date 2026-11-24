// Default Parameters (ES6) memberikan nilai cadangan jika argumen tidak diberikan atau bernilai undefined

function buatPesan(pengirim, teks = "Tidak ada pesan.", status = "Terkirim") {
  return "[Status: " + status + "] " + pengirim + ": " + teks;
}

console.log(buatPesan("Budi", "Selamat pagi!"));
console.log(buatPesan("Admin")); // Menggunakan nilai default untuk teks dan status
