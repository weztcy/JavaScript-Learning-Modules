// Memahami konsep Truthy dan Falsy dalam JavaScript
// Nilai Falsy di JavaScript ada 8:
// false, 0, -0, 0n, "", null, undefined, NaN

console.log("=== Evaluasi Nilai Falsy ===");
const daftarFalsy = [false, 0, "", null, undefined, NaN];
daftarFalsy.forEach(nilai => {
  if (!nilai) {
    console.log("Nilai falsy terdeteksi:", String(nilai));
  }
});

console.log("\n=== Evaluasi Nilai Truthy ===");
// Nilai di luar 8 nilai falsy bernilai truthy (termasuk [], {}, dan '0')
const daftarTruthy = ["Hello", 123, [], {}, "false"];
daftarTruthy.forEach(nilai => {
  if (nilai) {
    console.log("Nilai truthy terdeteksi:", JSON.stringify(nilai));
  }
});
