// Menambahkan Method pada Function Prototype untuk Efisiensi Alokasi Memori

function Produk(nama, harga) {
  this.nama = nama;
  this.harga = harga;
}

// Menambahkan method ke Produk.prototype agar dibagikan ke seluruh instance
Produk.prototype.formatRupiah = function() {
  return "Rp " + this.harga.toLocaleString("id-ID");
};

const p1 = new Produk("Sepatu Olahraga", 450000);
const p2 = new Produk("Kaos Kaki", 25000);

console.log(p1.nama, ":", p1.formatRupiah());
console.log(p2.nama, ":", p2.formatRupiah());
