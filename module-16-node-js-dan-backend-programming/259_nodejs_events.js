// EventEmitter: Arsitektur Event-Driven Terdistribusi di Node.js
const EventEmitter = require('node:events');

class PemrosesOrder extends EventEmitter {}

const pemroses = new PemrosesOrder();

// Menambahkan listener untuk event 'orderSelesai'
pemroses.on('orderSelesai', (data) => {
  console.log("-> Listener 1: Mengirim email tanda terima kepada", data.pelanggan);
});

pemroses.on('orderSelesai', (data) => {
  console.log("-> Listener 2: Memperbarui stok gudang untuk invoice #" + data.invoice);
});

console.log("Memicu (emit) event order...");
pemroses.emit('orderSelesai', { invoice: "INV-8871", pelanggan: "Sinta" });
