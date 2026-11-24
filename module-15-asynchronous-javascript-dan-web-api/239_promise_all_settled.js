// Promise.allSettled(): Menunggu seluruh Promise selesai terlepas dari status fulfilled atau rejected

const tugasA = Promise.resolve("Laporan A Selesai");
const tugasB = Promise.reject(new Error("Laporan B Gagal"));
const tugasC = Promise.resolve("Laporan C Selesai");

Promise.allSettled([tugasA, tugasB, tugasC])
  .then(hasilList => {
    console.log("=== Hasil Promise.allSettled ===");
    hasilList.forEach((hasil, index) => {
      console.log("Tugas #" + (index + 1) + " -> Status:", hasil.status);
    });
  });
