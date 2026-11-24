// Perbedaan Abstract Equality (==) vs Strict Equality (===)

const angka = 100;
const teksAngka = "100";

// Operator == melakukan konversi tipe data otomatis (type coercion)
console.log("100 == '100'  (Abstract Equality) :", angka == teksAngka);  // true

// Operator === membandingkan nilai DAN tipe data tanpa konversi paksa (Sangat Direkomendasikan)
console.log("100 === '100' (Strict Equality)   :", angka === teksAngka); // false

// Perbandingan ketidaksamaan strict (!==)
console.log("100 !== '100' (Strict Inequality) :", angka !== teksAngka); // true
