// Teknik Console Debugging: group, count, trace, dan assert

console.log("=== Teknik Console Lanjutan ===");

// 1. console.count() menghitung frekuensi pemanggilan
console.count("Klik tombol");
console.count("Klik tombol");
console.count("Klik tombol");

// 2. console.group() mengelompokkan log secara visual
console.group("Inisialisasi Modul");
console.log("Langkah 1: Konfigurasi dimuat.");
console.log("Langkah 2: Database terhubung.");
console.groupEnd();

// 3. console.assert() mencetak pesan hanya jika kondisi bernilai false
const nilai = 45;
console.assert(nilai >= 50, "Assert Gagal: Nilai siswa kurang dari 50!");
