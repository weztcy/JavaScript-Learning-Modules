// setTimeout(): Menjadwalkan eksekusi fungsi setelah jeda waktu tertentu (dalam milidetik)

console.log("Langkah 1: Menjadwalkan timer...");

const durasiMs = 50;
setTimeout(() => {
  console.log("Langkah 3: Callback timer selesai dieksekusi setelah jeda " + durasiMs + " ms.");
}, durasiMs);

console.log("Langkah 2: Baris kode ini dieksekusi terlebih dahulu sebelum timer selesai.");
