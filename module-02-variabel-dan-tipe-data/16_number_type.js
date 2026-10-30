// Tipe data Number dalam JavaScript merepresentasikan bilangan bulat dan pecahan
// menggunakan format IEEE 754 64-bit floating point.

let bilanganBulat = 100;
let bilanganDesimal = 3.14;
let bilanganNegatif = -25;
let notasiEksponensial = 2.5e6; // 2.500.000

console.log("Bulat:", bilanganBulat);
console.log("Desimal:", bilanganDesimal);
console.log("Negatif:", bilanganNegatif);
console.log("Eksponensial:", notasiEksponensial);

// Nilai khusus dalam tipe Number: Infinity dan NaN (Not-a-Number)
console.log("Pembagian dengan nol:", 10 / 0); // Infinity
console.log("Operasi tidak valid:", "Halo" * 5); // NaN
console.log("Cek NaN:", Number.isNaN("Halo" * 5));
