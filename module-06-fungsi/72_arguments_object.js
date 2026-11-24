// Objek 'arguments' adalah objek array-like bawaan yang tersedia di dalam regular function

function jumlahkanSemua() {
  let total = 0;
  // arguments memiliki properti .length dan dapat diakses dengan indeks
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("Total (3 argumen):", jumlahkanSemua(10, 20, 30));
console.log("Total (5 argumen):", jumlahkanSemua(1, 2, 3, 4, 5));
