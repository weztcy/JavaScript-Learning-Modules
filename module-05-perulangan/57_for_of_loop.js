// Perulangan 'for...of' (ES6) digunakan untuk mengiterasi nilai langsung dari objek iterable
// seperti Array, String, Map, atau Set

const daftarBahasa = ["JavaScript", "TypeScript", "Node.js", "Python"];

console.log("=== Iterasi Nilai Array dengan for...of ===");
for (const bahasa of daftarBahasa) {
  console.log("- Belajar teknologi:", bahasa);
}

console.log("\n=== Iterasi Karakter String dengan for...of ===");
const kata = "KODE";
for (const huruf of kata) {
  console.log("Huruf:", huruf);
}
