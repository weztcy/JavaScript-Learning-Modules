// Perulangan 'do-while' selalu mengeksekusi blok kode minimal satu kali
// karena pemeriksaan kondisi dilakukan di akhir setiap iterasi

let nomorAntrian = 1;

console.log("=== Demonstrasi Perulangan do-while ===");
do {
  console.log("Melayani nomor antrian ke:", nomorAntrian);
  nomorAntrian++;
} while (nomorAntrian <= 3);

// Contoh kasus kondisi awal sudah false tetapi blok tetap dieksekusi 1 kali
let cobaLagi = false;
do {
  console.log("Pesan ini tetap tercetak satu kali meski kondisi awal false.");
} while (cobaLagi);
