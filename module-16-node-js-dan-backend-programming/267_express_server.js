// Membuat Web Server Menggunakan Express Framework
const express = require('express');

const app = express();
const PORT = 0; // Port dinamis

app.get('/', (req, res) => {
  res.send("Selamat datang di Express Web Server!");
});

const server = app.listen(PORT, () => {
  const portAktif = server.address().port;
  console.log("Express Server berjalan pada port:", portAktif);

  // Menutup server setelah demonstrasi
  server.close(() => {
    console.log("Express Server ditutup dengan aman.");
  });
});
