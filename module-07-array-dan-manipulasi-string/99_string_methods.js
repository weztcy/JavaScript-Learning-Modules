// Berbagai Metode Penting pada String: toUpperCase, toLowerCase, trim, padStart

const teksKotor = "   Selamat Belajar JavaScript Modern!   ";

console.log("Teks Asli        : '" + teksKotor + "'");
console.log("Teks Di-trim     : '" + teksKotor.trim() + "'");
console.log("Huruf Besar      :", teksKotor.trim().toUpperCase());
console.log("Huruf Kecil      :", teksKotor.trim().toLowerCase());

// Pemformatan nomor urut dengan padStart()
const nomorUrut = "42";
console.log("Nomor invoice    : INV-" + nomorUrut.padStart(5, "0"));
