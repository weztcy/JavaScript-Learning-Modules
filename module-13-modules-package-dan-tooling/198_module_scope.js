// Module Scope: Variabel di tingkat teratas dalam modul bersifat privat bagi modul tersebut

// Variabel ini berada di dalam module scope, tidak mencemari global scope (global / window)
const konfigurasiPrivatModul = "API_KEY_INTERNAL_SECRET";

function ambilStatusModul() {
  return "Modul beroperasi dengan kunci berpanjang " + konfigurasiPrivatModul.length + " karakter.";
}

console.log("=== Module Scope Isolation ===");
console.log(ambilStatusModul());
console.log("Apakah konfigurasiPrivatModul ada di global?:", typeof global.konfigurasiPrivatModul); // undefined
