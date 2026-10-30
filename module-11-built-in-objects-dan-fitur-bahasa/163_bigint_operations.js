// Operasi Matematika Khusus pada BigInt

const a = 9007199254740995n;
const b = 5n;

console.log("Penjumlahan :", (a + b).toString());
console.log("Pengurangan :", (a - b).toString());
console.log("Perkalian   :", (a * b).toString());
console.log("Pembagian   :", (a / b).toString()); // Pembagian BigInt selalu membulatkan ke bawah (integer division)
console.log("Sisa bagi   :", (a % b).toString());
