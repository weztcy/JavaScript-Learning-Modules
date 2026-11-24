// Higher-Order Function (HOF): Fungsi yang menerima fungsi lain sebagai argumen
// atau mengembalikan fungsi sebagai hasilnya

function manipulasiAngka(daftarAngka, operasiTransformasi) {
  const hasil = [];
  for (let i = 0; i < daftarAngka.length; i++) {
    hasil.push(operasiTransformasi(daftarAngka[i]));
  }
  return hasil;
}

const angkaList = [1, 2, 3, 4, 5];
const hasilKuadrat = manipulasiAngka(angkaList, x => x * x);
const hasilKaliDua = manipulasiAngka(angkaList, x => x * 2);

console.log("Array asli      :", angkaList);
console.log("Hasil kuadrat   :", hasilKuadrat);
console.log("Hasil kali dua  :", hasilKaliDua);
