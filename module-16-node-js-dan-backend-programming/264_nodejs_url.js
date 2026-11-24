// Modul 'node:url': Pemetaan Query Param dan Struktur Endpoint Backend
const { URL, URLSearchParams } = require('node:url');

const endpoint = new URL("https://api.toko.co.id/v2/produk?kategori=elektronik&sort=termurah");

console.log("=== Pengolahan URL Backend ===");
console.log("Host API     :", endpoint.host);
console.log("Path Endpoint:", endpoint.pathname);
console.log("Kategori     :", endpoint.searchParams.get("kategori"));
console.log("Pengurutan   :", endpoint.searchParams.get("sort"));

endpoint.searchParams.append("halaman", "1");
console.log("URL Hasil Modifikasi:", endpoint.href);
