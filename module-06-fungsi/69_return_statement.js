// Pernyataan 'return' menghentikan eksekusi fungsi dan mengirimkan nilai balik ke pemanggil

function cekStatusKelulusan(skor) {
  if (skor >= 75) {
    return "LULUS"; // Langsung keluar dari fungsi
  }
  return "REMIDIAL"; // Dijalankan jika kondisi di atas tidak terpenuhi
}

console.log("Skor 80:", cekStatusKelulusan(80));
console.log("Skor 65:", cekStatusKelulusan(65));
