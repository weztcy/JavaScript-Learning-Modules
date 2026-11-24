// Penggantian Teks menggunakan replace() dan replaceAll()

const teks = "Kucing belang makan ikan bersama kucing lain.";

// replace() hanya mengganti kemunculan pertama
const hasilSatu = teks.replace("kucing", "anjing");
console.log("Hasil replace()   :", hasilSatu);

// replaceAll() mengganti seluruh kemunculan teks
const teksUniversal = "Apel merah, apel hijau, dan apel manis.";
const hasilSemua = teksUniversal.replaceAll("apel", "jeruk");
console.log("Hasil replaceAll():", hasilSemua);
