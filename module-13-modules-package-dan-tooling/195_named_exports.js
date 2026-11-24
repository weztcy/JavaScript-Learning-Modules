// Named Exports: Mengekspor beberapa variabel atau fungsi dengan nama spesifik dalam satu file

// Modul dapat memiliki banyak named export
const PHI = 3.14159;
function luasLingkaran(r) { return PHI * r * r; }
function kelilingLingkaran(r) { return 2 * PHI * r; }

const namedExportsSimulasi = { PHI, luasLingkaran, kelilingLingkaran };

console.log("=== Named Exports ===");
console.log("Komponen diekspor:", Object.keys(namedExportsSimulasi));
console.log("Luas Lingkaran r=10    :", namedExportsSimulasi.luasLingkaran(10));
console.log("Keliling Lingkaran r=10:", namedExportsSimulasi.kelilingLingkaran(10));
