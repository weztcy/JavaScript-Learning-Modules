// Strict Mode ("use strict") mengaktifkan pembatasan ketat untuk mencegah bug tersembunyi
"use strict";

// Di strict mode, kita tidak bisa memberikan nilai ke variabel tanpa deklarasi (let/const/var)
// Contoh yang benar: variabel dideklarasikan secara eksplisit
let namaPengguna = "Dewi";
console.log("Nama Pengguna:", namaPengguna);

// Fungsi yang menerapkan strict mode secara aman
function validasiStrict() {
  // Strict mode mencegah penamaan parameter duplikat atau penghapusan properti non-configurable
  const angkaA = 10;
  const angkaB = 20;
  return angkaA + angkaB;
}

console.log("Hasil Fungsi Strict Mode:", validasiStrict());
