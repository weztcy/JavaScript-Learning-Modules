// Nilai 'null' merepresentasikan ketiadaan nilai yang disengaja (intentional absence of value)

let dataPelanggan = null; // Menandakan bahwa data saat ini memang sengaja kosong
console.log("Nilai dataPelanggan:", dataPelanggan);

// Membedakan null dan undefined
console.log("Perbandingan equality (==):", null == undefined); // true (keduanya bernilai kosong)
console.log("Perbandingan strict (===):", null === undefined); // false (tipe data berbeda)

// null digunakan saat ingin mereset referensi suatu variabel
dataPelanggan = { id: 1, nama: "Bambang" };
console.log("Setelah diisi objek:", dataPelanggan);
dataPelanggan = null; // Dikosongkan kembali
console.log("Setelah direset ke null:", dataPelanggan);
