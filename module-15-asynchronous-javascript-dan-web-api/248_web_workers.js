// Web Workers (Browser) / Worker Threads (Node.js): Menjalankan komputasi berat di thread terpisah

console.log("=== Konsep Multi-threading JavaScript ===");
console.log("Worker menjalankan tugas intensif tanpa memblokir UI thread utama.");

function simulasiTugasThreadPekerja(angkaAwal) {
  console.log("Worker menerima tugas komputasi untuk angka:", angkaAwal);
  let hasil = 0;
  for (let i = 0; i < 10000; i++) {
    hasil += i;
  }
  return hasil;
}

const hasilWorker = simulasiTugasThreadPekerja(500);
console.log("Komputasi worker selesai. Hasil:", hasilWorker);
