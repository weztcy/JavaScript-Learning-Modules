// Nested Function: Fungsi yang didefinisikan di dalam tubuh fungsi lain
// Berguna untuk mengorganisasi langkah-langkah logika pembantu (helper)

function hitungHipotenusa(a, b) {
  // Fungsi pembantu lokal untuk menghitung kuadrat
  function kuadrat(x) {
    return x * x;
  }

  // Teorema Pythagoras: c = sqrt(a^2 + b^2)
  return Math.sqrt(kuadrat(a) + kuadrat(b));
}

console.log("Hipotenusa segitiga (3, 4) =", hitungHipotenusa(3, 4));
console.log("Hipotenusa segitiga (5, 12) =", hitungHipotenusa(5, 12));
