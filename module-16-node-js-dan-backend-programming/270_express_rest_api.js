// Membangun REST API CRUD Sederhana Menggunakan Express
const express = require('express');

const app = express();
app.use(express.json());

const daftarBuku = [
  { id: 1, judul: "Belajar JavaScript" },
  { id: 2, judul: "Desain Sistem Modern" }
];

app.get('/api/buku', (req, res) => {
  res.json(daftarBuku);
});

console.log("=== Endpoint REST API Buku ===");
console.log("GET /api/buku ->", JSON.stringify(daftarBuku));
