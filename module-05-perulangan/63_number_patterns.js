// Membuat Pola Segitiga Angka Menggunakan Nested Loop

console.log("=== Pola Segitiga Angka Bertingkat ===");

const tinggiSegitiga = 5;

for (let baris = 1; baris <= tinggiSegitiga; baris++) {
  let deret = "";
  for (let kolom = 1; kolom <= baris; kolom++) {
    deret += kolom + " ";
  }
  console.log(deret.trim());
}
