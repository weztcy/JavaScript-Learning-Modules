// Metode flat() dan flatMap() untuk meratakan array bersarang (nested array)

const arrayBersarang = [1, [2, 3], [[4, 5]]];

// Meratakan 1 level ke bawah
console.log("flat() 1 level :", arrayBersarang.flat(1));

// Meratakan hingga kedalaman tak hingga
console.log("flat(Infinity) :", arrayBersarang.flat(Infinity));

// flatMap() memetakan setiap elemen lalu meratakan hasilnya 1 level
const kata = ["Halo Dunia", "Belajar JS"];
const daftarKata = kata.flatMap(k => k.split(" "));
console.log("Hasil flatMap  :", daftarKata);
