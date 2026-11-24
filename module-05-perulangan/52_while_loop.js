// Perulangan 'while' memeriksa kondisi di awal sebelum mengeksekusi blok kode
// Berhenti ketika kondisi menghasilkan nilai false

let bahanBakar = 3;
console.log("=== Perulangan while Berjalan Selama Bahan Bakar Masih Ada ===");

while (bahanBakar > 0) {
  console.log("Kendaraan melaju... Sisa bahan bakar:", bahanBakar);
  bahanBakar--; // Kurangi bahan bakar agar tidak terjadi infinite loop
}

console.log("Bahan bakar habis. Kendaraan berhenti.");
