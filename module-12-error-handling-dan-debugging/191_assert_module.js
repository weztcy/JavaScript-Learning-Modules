// Modul bawaan 'node:assert' untuk Memvalidasi Kondisi Logika di Node.js
const assert = require('node:assert');

console.log("=== Menguji Logika Program dengan Modul Assert ===");

function tambah(a, b) {
  return a + b;
}

// assert.strictEqual memastikan nilai dan tipe persis sama
assert.strictEqual(tambah(10, 5), 15, "10 + 5 harus bernilai 15");
console.log("Uji 1: Penambahan valid (Lolos)");

// assert.deepStrictEqual untuk memeriksa kesamaan isi objek/array
const dataA = { id: 1, role: "admin" };
const dataB = { id: 1, role: "admin" };
assert.deepStrictEqual(dataA, dataB, "Objek dataA dan dataB harus identik");
console.log("Uji 2: Kesamaan data objek (Lolos)");
