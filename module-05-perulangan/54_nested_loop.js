// Nested Loop: Perulangan di dalam perulangan
// Sering digunakan untuk mengolah matriks, tabel, atau pola multi-dimensi

console.log("=== Menampilkan Koordinat Grid Matriks 3x3 ===");

for (let baris = 1; baris <= 3; baris++) {
  let outputBaris = "";
  for (let kolom = 1; kolom <= 3; kolom++) {
    outputBaris += "[" + baris + "," + kolom + "] ";
  }
  console.log(outputBaris);
}
