// Menghitung Nilai Faktorial (N!) Menggunakan Perulangan

function hitungFaktorial(n) {
  if (n < 0) return null;
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i; // Kalikan hasil dengan bilangan i
  }
  return hasil;
}

const angkaUji = 5;
console.log("Perhitungan Faktorial " + angkaUji + "! :");
console.log("5! = 1 * 2 * 3 * 4 * 5 =", hitungFaktorial(angkaUji));
