// Partial Application: Mengikat sebagian argumen pada suatu fungsi untuk menghasilkan fungsi yang lebih spesifik

function hitungDiskon(persen, hargaBarang) {
  return hargaBarang - (hargaBarang * (persen / 100));
}

// Fungsi parsial dengan mengunci persen diskon 20%
const diskonMember = hitungDiskon.bind(null, 20);

console.log("Harga normal Rp 100.000 dengan diskon member:", diskonMember(100000));
console.log("Harga normal Rp 250.000 dengan diskon member:", diskonMember(250000));
