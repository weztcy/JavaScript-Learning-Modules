// Memahami lingkungan eksekusi (JavaScript Runtime)
// JavaScript dapat berjalan di browser (mengakses window, document) atau di Node.js (mengakses process, global)

// Memeriksa runtime saat ini
const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;

console.log("Informasi JavaScript Runtime:");
if (isNode) {
  console.log("- Lingkungan: Node.js (Server/Terminal)");
  console.log("- Versi Node.js:", process.version);
  console.log("- Platform OS:", process.platform);
  console.log("- Arsitektur:", process.arch);
} else {
  console.log("- Lingkungan: Web Browser");
}

// Runtime menyediakan Call Stack, Event Loop, dan API bawaan
console.log("Runtime siap mengeksekusi kode JavaScript asynchronous dan synchronous.");
