// Nilai 'undefined' berarti sebuah variabel telah dideklarasikan,
// tetapi belum pernah diberikan nilai sama sekali.

let dataBelumDiisi;
console.log("Nilai variabel:", dataBelumDiisi); // undefined
console.log("Tipe data:", typeof dataBelumDiisi); // "undefined"

// Fungsi tanpa pernyataan return secara default mengembalikan undefined
function tanpaReturn() {
  const hasil = 10 + 5;
}

console.log("Hasil fungsi tanpa return:", tanpaReturn());
