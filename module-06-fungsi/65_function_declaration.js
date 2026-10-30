// Function Declaration dideklarasikan menggunakan kata kunci 'function'
// Mengalami hoisting penuh, sehingga dapat dipanggil sebelum baris deklarasinya

console.log("Panggilan sebelum deklarasi:", hitungLuasPersegi(4));

// Deklarasi fungsi formal
function hitungLuasPersegi(sisi) {
  // Menghitung luas persegi dari parameter sisi
  return sisi * sisi;
}

console.log("Panggilan setelah deklarasi:", hitungLuasPersegi(6));
