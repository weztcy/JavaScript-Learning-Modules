// Percabangan 'if-else' menyediakan dua cabang alternatif keputusan

const nilaiUjian = 68;
const batasLulus = 70;

console.log("Nilai peserta:", nilaiUjian);

if (nilaiUjian >= batasLulus) {
  // Cabang jika kondisi benar
  console.log("Status: Selamat, Anda dinyatakan LULUS!");
} else {
  // Cabang jika kondisi salah
  console.log("Status: Maaf, Anda BELUM LULUS. Silakan mengikuti ujian remidial.");
}
