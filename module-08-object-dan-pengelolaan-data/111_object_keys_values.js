// Object.keys() dan Object.values() untuk mengekstrak array kunci atau array nilai objek

const inventaris = {
  meja: 15,
  kursi: 40,
  lemari: 5,
  komputer: 20
};

const daftarItem = Object.keys(inventaris);
const jumlahItem = Object.values(inventaris);

console.log("Kunci Properti (Item):", daftarItem);
console.log("Nilai Properti (Stok):", jumlahItem);
