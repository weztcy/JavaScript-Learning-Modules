// setInterval() dan clearInterval(): Menjalankan fungsi secara berulang dengan interval waktu tetap

let hitungan = 1;
console.log("Memulai interval detak...");

const intervalId = setInterval(() => {
  console.log("Detak ke-" + hitungan);
  hitungan++;

  if (hitungan > 3) {
    // Hentikan pengulangan interval
    clearInterval(intervalId);
    console.log("Interval berhasil dihentikan (clearInterval).");
  }
}, 30);
