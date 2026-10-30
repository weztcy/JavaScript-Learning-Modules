// Template Literals (menggunakan backtick ``) untuk string multi-baris dan interpolasi variabel

const produk = "Laptop Gaming";
const harga = 15000000;
const jumlah = 2;

// Interpolasi ekspresi di dalam ${...}
const notaPembelian = `
============================
NOTA PEMBELIAN
============================
Barang : ${produk}
Harga  : Rp ${harga.toLocaleString("id-ID")}
Jumlah : ${jumlah} unit
TOTAL  : Rp ${(harga * jumlah).toLocaleString("id-ID")}
============================
`;

console.log(notaPembelian.trim());
