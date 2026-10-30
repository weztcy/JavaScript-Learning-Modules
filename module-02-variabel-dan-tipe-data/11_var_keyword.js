// Deklarasi variabel dengan kata kunci 'var' (legacy / pra-ES6)
// 'var' memiliki sifat function-scoped dan mengalami hoisting

var namaLengkap = "Ahmad Dahlan";
console.log("Nilai awal var:", namaLengkap);

// 'var' dapat dideklarasikan ulang dalam cakupan yang sama tanpa error
var namaLengkap = "K.H. Ahmad Dahlan";
console.log("Setelah deklarasi ulang:", namaLengkap);

// Demonstrasi hoisting pada var (variabel dinaikkan ke atas dengan nilai undefined)
console.log("Nilai variabel sebelum baris inisialisasi (hoisting):", kotaAsal);
var kotaAsal = "Yogyakarta";
console.log("Nilai variabel setelah inisialisasi:", kotaAsal);
