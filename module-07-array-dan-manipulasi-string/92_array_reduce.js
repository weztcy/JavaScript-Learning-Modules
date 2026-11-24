// Metode reduce() mengakumulasikan seluruh elemen array menjadi satu nilai tunggal

const keranjang = [
  { item: "Buku", subtotal: 45000 },
  { item: "Pulpen", subtotal: 15000 },
  { item: "Penggaris", subtotal: 8000 }
];

// Menghitung total belanja dengan initial accumulator = 0
const grandTotal = keranjang.reduce((total, produk) => {
  return total + produk.subtotal;
}, 0);

console.log("Daftar Belanja:", keranjang);
console.log("Grand Total   : Rp", grandTotal);
