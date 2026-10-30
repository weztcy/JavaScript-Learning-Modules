// Alur eksekusi script: Synchronous vs Asynchronous
// JavaScript secara default mengeksekusi instruksi baris demi baris (single-threaded synchronous)

console.log("Langkah 1: Script mulai dieksekusi secara synchronous.");

// Operasi synchronous langsung diselesaikan sebelum lanjut ke baris berikutnya
let perhitunganSync = 50 * 2;
console.log("Langkah 2: Perhitungan synchronous selesai =", perhitunganSync);

// Operasi asynchronous dijadwalkan ke Event Loop (Task Queue)
setTimeout(() => {
  console.log("Langkah 4: Callback asynchronous selesai dijalankan dari Event Loop.");
}, 0);

console.log("Langkah 3: Script utama selesai dieksekusi (call stack kosong).");
