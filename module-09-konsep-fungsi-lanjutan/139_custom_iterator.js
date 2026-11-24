// Custom Iterator untuk Rentang Bilangan (Range Iterator)

function buatRange(mulai, selesai, langkah = 1) {
  return {
    [Symbol.iterator]() {
      let saatIni = mulai;
      return {
        next() {
          if (saatIni <= selesai) {
            const hasil = { value: saatIni, done: false };
            saatIni += langkah;
            return hasil;
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
}

console.log("Deret angka ganjil 1 hingga 9:");
for (const n of buatRange(1, 9, 2)) {
  console.log("Angka:", n);
}
