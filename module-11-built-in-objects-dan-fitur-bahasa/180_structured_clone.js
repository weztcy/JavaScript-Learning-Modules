// structuredClone(): Solusi standar modern untuk Deep Cloning objek kompleks
// Mendukung Date, Set, Map, Array, dan Objek bersarang

const dataAsal = {
  tanggal: new Date("2026-01-01"),
  himpunan: new Set(["a", "b"]),
  kamus: new Map([["id", 100]]),
  anak: { level: 2 }
};

const clone = structuredClone(dataAsal);
clone.anak.level = 99;
clone.himpunan.add("c");

console.log("Level data asal   :", dataAsal.anak.level); // Tetap 2 (independen)
console.log("Level data clone  :", clone.anak.level);    // 99
console.log("Set data asal     :", Array.from(dataAsal.himpunan));
console.log("Set data clone    :", Array.from(clone.himpunan));
