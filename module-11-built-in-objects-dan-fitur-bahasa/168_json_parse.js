// JSON.parse(): Mengubah string berformat JSON menjadi objek atau nilai JavaScript

const jsonString = '{"nama":"Laptop","harga":12000000,"stok":15,"tersedia":true}';

try {
  const objek = JSON.parse(jsonString);
  console.log("Berhasil mem-parse JSON:");
  console.log("- Nama Produk :", objek.nama);
  console.log("- Harga       : Rp", objek.harga);
  console.log("- Tipe data   :", typeof objek);
} catch (e) {
  console.error("Gagal parse JSON:", e.message);
}
