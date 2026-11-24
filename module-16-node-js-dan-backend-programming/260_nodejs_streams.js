// Streams: Memproses Data Aliran Berukuran Besar secara Sepenggal (Chunk by Chunk)
const stream = require('node:stream');

console.log("=== Konsep Node.js Readable & Writable Streams ===");

// Membuat Readable Stream sederhana
const readable = stream.Readable.from(["Bagian A - ", "Bagian B - ", "Selesai!"]);

readable.on('data', (chunk) => {
  console.log("Menerima potongan stream:", chunk);
});

readable.on('end', () => {
  console.log("Aliran stream data telah tuntas diproses.");
});
