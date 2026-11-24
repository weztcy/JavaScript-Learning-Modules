// Perulangan 'for...in' digunakan untuk mengiterasi kunci atau properti (keys) dari sebuah Objek

const dataBuku = {
  judul: "Pemrograman Modern JavaScript",
  penulis: "Indra Wijaya",
  halaman: 350,
  tersedia: true
};

console.log("=== Membaca Properti Objek dengan for...in ===");
for (const properti in dataBuku) {
  // properti berisi nama key, dataBuku[properti] mengakses nilainya
  console.log(properti + " : " + dataBuku[properti]);
}
