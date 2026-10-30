// Membuat Web Server HTTP Native Sederhana Menggunakan Modul 'node:http'
const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: "Server Aktif", url: req.url }));
});

// Menjalankan server pada port dinamis (0) untuk demonstrasi aman
server.listen(0, () => {
  const port = server.address().port;
  console.log("HTTP Server Native aktif di port:", port);
  console.log("Server siap melayani request masuk...");

  // Menutup server agar proses pengujian/otomasi selesai dengan aman
  server.close(() => {
    console.log("Server berhasil dihentikan dengan tertib.");
  });
});
