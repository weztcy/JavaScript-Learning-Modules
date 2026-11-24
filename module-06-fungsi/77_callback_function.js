// Callback Function: Fungsi yang dikirimkan sebagai argumen ke fungsi lain
// untuk dieksekusi setelah tugas tertentu selesai

function prosesDataPengguna(nama, callback) {
  console.log("Memvalidasi dan menyiapkan data untuk:", nama);
  const dataSiap = "USER_" + nama.toUpperCase();
  // Jalankan callback dengan hasil data
  callback(dataSiap);
}

// Mengirimkan fungsi callback
prosesDataPengguna("Anita", function(hasil) {
  console.log("Callback dieksekusi! ID final:", hasil);
});
