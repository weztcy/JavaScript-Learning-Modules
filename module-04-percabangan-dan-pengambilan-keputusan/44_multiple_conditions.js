// Evaluasi beberapa kondisi gabungan menggunakan operator logika

const usia = 22;
const memilikiSIM = true;
const lulusTesKesehatan = true;

console.log("Pengecekan Kelayakan Pengemudi:");

// Kondisi gabungan: usia minimal 17 tahun, memiliki SIM, dan sehat
if (usia >= 17 && memilikiSIM && lulusTesKesehatan) {
  console.log("Status: Diizinkan mengemudikan kendaraan bermotor.");
} else {
  console.log("Status: Tidak memenuhi seluruh persyaratan mengemudi.");
}
