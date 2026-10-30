// Membaca Argumen Command-Line Menggunakan process.argv

// process.argv[0] adalah path executable node
// process.argv[1] adalah path file script
// process.argv[2...] adalah argumen tambahan yang dikirim pengguna
const argumenKustom = process.argv.slice(2);

console.log("=== Parameter Command-Line ===");
if (argumenKustom.length === 0) {
  console.log("Tidak ada parameter tambahan. Menampilkan nilai bawaan:");
  console.log("Nama Proyek: SistemBelajar | Mode: Standard");
} else {
  console.log("Parameter diterima:", argumenKustom.join(", "));
}
