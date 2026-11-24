// Konversi string ke angka menggunakan berbagai teknik di JavaScript

const inputTeks = "42";
const inputPecahan = "3.14159";
const inputInvalid = "abc123";

// 1. Menggunakan Number()
console.log("Number('42')       :", Number(inputTeks), "| Tipe:", typeof Number(inputTeks));

// 2. Menggunakan parseInt() - mengubah menjadi bilangan bulat
console.log("parseInt('42')     :", parseInt(inputTeks, 10));

// 3. Menggunakan parseFloat() - mempertahankan angka di belakang koma
console.log("parseFloat('3.14') :", parseFloat(inputPecahan));

// 4. Menggunakan unary plus (+) operator (pendekatan cepat)
console.log("+ '42'             :", +inputTeks);

// 5. Penanganan input yang tidak valid menghasilkan NaN
console.log("Number('abc123')   :", Number(inputInvalid)); // NaN
