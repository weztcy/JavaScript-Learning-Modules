// Buffer: Menangani Data Biner Mentah (Raw Binary Data) di Node.js

// Membuat buffer dari string teks
const bufferTeks = Buffer.from("Belajar JavaScript Node.js", "utf8");

console.log("=== Node.js Buffer ===");
console.log("Representasi Heksadesimal :", bufferTeks);
console.log("Panjang Buffer (bytes)    :", bufferTeks.length);
console.log("Kembali ke String Teks    :", bufferTeks.toString("utf8"));
console.log("Format Base64             :", bufferTeks.toString("base64"));
