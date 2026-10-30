// ES Modules: Konsep Import Sintaks Standar ECMAScript
// Pada ESM, dependensi diimpor dengan sintaks: import { fungsi } from './modul.js';

// Mensimulasikan pemanfaatan hasil import
const modulMatematika = {
  kali: (a, b) => a * b,
  bagi: (a, b) => a / b
};

const { kali, bagi } = modulMatematika;

console.log("=== Konsep ES Modules Import ===");
console.log("Mengimpor fungsi kali & bagi dari modul.");
console.log("Hasil kali 6 x 7 =", kali(6, 7));
console.log("Hasil bagi 20 / 4 =", bagi(20, 4));
