// Proyek 10: Backend REST API untuk Data Produk (Express)
const express = require('express');

const app = express();
app.use(express.json());

const produkDB = [
  { id: 1, nama: "Monitor 24 Inci", harga: 1800000 },
  { id: 2, nama: "Webcam HD", harga: 450000 }
];

app.get('/api/produk', (req, res) => res.json(produkDB));

console.log("=== PROYEK: REST API PRODUK ===");
console.log("Database Siap:", JSON.stringify(produkDB));
