// Memahami Prinsip Pemeriksaan Kode Statis dengan Linter (ESLint)

console.log("=== Konsep Linting dengan ESLint ===");
console.log("ESLint menganalisis source code secara statis untuk menemukan potensi bug dan menjaga konsistensi gaya.");

const aturanUmumESLint = [
  { aturan: "no-unused-vars", fungsi: "Mencegah variabel yang dideklarasikan tetapi tidak pernah digunakan" },
  { aturan: "no-undef", fungsi: "Mencegah penggunaan variabel yang belum dideklarasikan" },
  { aturan: "eqeqeq", fungsi: "Mewajibkan penggunaan strict equality (=== dan !==)" },
  { aturan: "no-console", fungsi: "Mengingatkan untuk membersihkan console.log pada kode produksi" }
];

aturanUmumESLint.forEach((item, idx) => {
  console.log((idx + 1) + ". " + item.aturan.padEnd(16) + ": " + item.fungsi);
});
