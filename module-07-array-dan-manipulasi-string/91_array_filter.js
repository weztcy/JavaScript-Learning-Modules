// Metode filter() menyaring elemen array berdasarkan fungsi predikat yang mengembalikan boolean

const angka = [12, 5, 8, 130, 44, 3, 27];

// Menyaring angka yang lebih besar dari 20
const angkaBesar = angka.filter(n => n > 20);

console.log("Array Lengkap :", angka);
console.log("Hasil Filter  :", angkaBesar);
