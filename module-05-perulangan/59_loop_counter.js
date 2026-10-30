// Program Penghitung Frekuensi atau Kemunculan Elemen Tertentu

const nilaiSiswa = [80, 95, 70, 85, 60, 90, 75, 85, 85, 100];
const ambangBatas = 80;
let jumlahNilaiTinggi = 0;

for (let i = 0; i < nilaiSiswa.length; i++) {
  if (nilaiSiswa[i] >= ambangBatas) {
    jumlahNilaiTinggi++; // Tambahkan hitungan counter
  }
}

console.log("Daftar Nilai Siswa:", nilaiSiswa);
console.log("Jumlah siswa dengan nilai >= " + ambangBatas + " :", jumlahNilaiTinggi, "orang.");
