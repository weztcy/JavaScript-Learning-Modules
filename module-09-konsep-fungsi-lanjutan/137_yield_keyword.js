// Penggunaan Keyword 'yield' dan Komunikasi Dua Arah pada Generator

function* alurInteraktif() {
  console.log("1. Alur dimulai.");
  const inputA = yield "Berapa nilai A?";
  console.log("Input A diterima:", inputA);
  
  const inputB = yield "Berapa nilai B?";
  console.log("Input B diterima:", inputB);

  return inputA + inputB;
}

const proses = alurInteraktif();
console.log(proses.next().value);
console.log(proses.next(15).value);
const hasilAkhir = proses.next(25);
console.log("Total akhir hasil komputasi:", hasilAkhir.value);
