// Generator Function (function*) menghasilkan objek Generator yang dapat dijeda (pause) dan dilanjutkan (resume)

function* generatorAngkaGenap() {
  let n = 2;
  while (n <= 8) {
    yield n; // Menghasilkan nilai dan menunda eksekusi
    n += 2;
  }
}

const gen = generatorAngkaGenap();
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 6, done: false }
console.log(gen.next()); // { value: 8, done: false }
console.log(gen.next()); // { value: undefined, done: true }
