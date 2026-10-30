// Operator Ternary (conditional operator): kondisi ? ekspresiTrue : ekspresiFalse

const nilaiUjian = 75;

// Menentukan status kelulusan dalam satu baris kode yang ringkas
const statusKelulusan = nilaiUjian >= 70 ? "LULUS" : "REMIDIAL";

console.log("Nilai:", nilaiUjian);
console.log("Status:", statusKelulusan);

// Ternary bersarang (nested) untuk penentuan kategori sederhana
const kategori = nilaiUjian >= 85 ? "Sangat Baik" : nilaiUjian >= 70 ? "Baik" : "Kurang";
console.log("Kategori Nilai:", kategori);
