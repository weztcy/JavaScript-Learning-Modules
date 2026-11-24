// Penanganan Error yang Kuat pada Alur Callback

function bagiAngkaAsinkron(a, b, callback) {
  setTimeout(() => {
    if (b === 0) {
      callback(new Error("Kesalahan Matematika: Tidak dapat membagi dengan nol."));
    } else {
      callback(null, a / b);
    }
  }, 10);
}

console.log("Memulai operasi pembagian aman...");
bagiAngkaAsinkron(100, 0, (err, hasil) => {
  if (err) {
    console.log("[TERTANGKAP ERROR]:", err.message);
  } else {
    console.log("Hasil pembagian:", hasil);
  }
});
