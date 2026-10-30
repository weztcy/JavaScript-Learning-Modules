// Memahami konsep input menggunakan prompt() di peramban web (browser)
// Di browser, prompt("Masukkan nama:") akan menampilkan kotak dialog interaktif

function simulasiPrompt(pertanyaan, nilaiDefault) {
  // Jika berjalan di lingkungan browser, window.prompt dapat dipanggil
  if (typeof prompt !== "undefined") {
    return prompt(pertanyaan, nilaiDefault);
  }
  // Simulasi nilai kembalian untuk lingkungan terminal / testing
  return nilaiDefault;
}

console.log("=== Konsep Dialog Input prompt() ===");
const namaPengguna = simulasiPrompt("Siapa nama Anda?", "Alisa");
const umurPengguna = simulasiPrompt("Berapa usia Anda?", "22");

console.log("Hasil input nama :", namaPengguna);
console.log("Hasil input usia :", umurPengguna, "(tipe string)");
console.log("Konversi ke angka :", Number(umurPengguna), "(tipe number)");
