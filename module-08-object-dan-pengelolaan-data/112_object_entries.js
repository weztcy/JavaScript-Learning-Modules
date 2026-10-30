// Object.entries() mengubah objek menjadi array pasangan [kunci, nilai]

const nilaiMataKuliah = {
  Algoritma: 88,
  BasisData: 92,
  JaringanKomputer: 85
};

console.log("Pasangan Kunci dan Nilai:");
for (const [matkul, nilai] of Object.entries(nilaiMataKuliah)) {
  console.log("- " + matkul.padEnd(18) + ": " + nilai);
}
