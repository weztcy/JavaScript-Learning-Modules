// Express Routing: Mengelola Berbagai Jalur dan Metode HTTP (GET, POST, PUT, DELETE)
const express = require('express');

const app = express();
const router = express.Router();

// Menentukan rute-rute aplikasi pada router
router.get('/users', (req, res) => res.json({ pesan: "Daftar User" }));
router.post('/users', (req, res) => res.json({ pesan: "Tambah User" }));
router.get('/users/:id', (req, res) => res.json({ pesan: "Detail User #" + req.params.id }));

app.use('/api', router);

console.log("=== Rute Express Terdaftar ===");
router.stack.forEach(r => {
  if (r.route && r.route.path) {
    const method = Object.keys(r.route.methods)[0].toUpperCase();
    console.log("Rute: " + method.padEnd(6) + " /api" + r.route.path);
  }
});
