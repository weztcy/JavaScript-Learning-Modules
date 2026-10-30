// Regular Expression (RegExp) Dasar: Pola pencocokan teks

const polaDigit = /\d{3}-\d{4}/; // 3 angka - 4 angka
const teks1 = "Hubungi 021-5555 untuk info.";
const teks2 = "Nomor tidak ada.";

console.log("Pola ditemukan pada teks1?", polaDigit.test(teks1));
console.log("Pola ditemukan pada teks2?", polaDigit.test(teks2));

// Menggunakan match()
const hasilCocok = teks1.match(polaDigit);
console.log("Hasil pencocokan:", hasilCocok[0]);
