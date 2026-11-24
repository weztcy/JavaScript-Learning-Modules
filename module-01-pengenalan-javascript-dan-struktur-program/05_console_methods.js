// Berbagai metode console selain console.log() untuk keperluan debugging dan pencatatan

// 1. console.info() - Memberikan informasi umum
console.info("Info: Aplikasi JavaScript siap dijalankan.");

// 2. console.warn() - Menampilkan pesan peringatan
console.warn("Peringatan: Variabel konfigurasi menggunakan nilai bawaan.");

// 3. console.error() - Menampilkan pesan kesalahan
console.error("Error: Simulasi kegagalan koneksi data.");

// 4. console.table() - Menampilkan data tabular agar mudah dibaca
const daftarSiswa = [
  { nama: "Ali", nilai: 85 },
  { nama: "Siti", nilai: 92 },
  { nama: "Rian", nilai: 78 }
];
console.table(daftarSiswa);

// 5. console.time() dan console.timeEnd() - Mengukur durasi eksekusi kode
console.time("Operasi Loop");
let total = 0;
for (let i = 0; i < 100000; i++) {
  total += i;
}
console.timeEnd("Operasi Loop");
console.log("Total akumulasi:", total);
