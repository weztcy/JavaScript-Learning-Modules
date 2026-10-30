// Function Memoization: Teknik optimasi dengan menyimpan hasil kalkulasi berdasarkan argumen

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const kunci = JSON.stringify(args);
    if (cache[kunci] !== undefined) {
      console.log("-> Mengambil dari Cache untuk input:", args);
      return cache[kunci];
    }
    console.log("-> Menghitung secara aktual untuk input:", args);
    const hasil = fn(...args);
    cache[kunci] = hasil;
    return hasil;
  };
}

const faktorial = n => (n <= 1 ? 1 : n * faktorial(n - 1));
const faktorialMemoized = memoize(faktorial);

console.log("Hasil 1:", faktorialMemoized(5));
console.log("Hasil 2:", faktorialMemoized(5)); // Diambil dari cache instan
