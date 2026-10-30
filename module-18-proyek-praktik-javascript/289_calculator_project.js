// Proyek 1: Kalkulator Sederhana Berorientasi Objek

class Kalkulator {
  tambah(a, b) { return a + b; }
  kurang(a, b) { return a - b; }
  kali(a, b) { return a * b; }
  bagi(a, b) {
    if (b === 0) throw new Error("Tidak dapat membagi dengan nol!");
    return a / b;
  }
}

console.log("=== PROYEK: KALKULATOR MATEMATIKA ===");
const calc = new Kalkulator();
console.log("15 + 25 =", calc.tambah(15, 25));
console.log("50 - 18 =", calc.kurang(50, 18));
console.log("12 x 8  =", calc.kali(12, 8));
console.log("100 / 4 =", calc.bagi(100, 4));
