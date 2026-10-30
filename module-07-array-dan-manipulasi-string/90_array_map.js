// Metode map() mentransformasikan setiap elemen array menjadi elemen baru tanpa memutasi array asal

const hargaRupiah = [10000, 25000, 50000];

// Menambahkan pajak 10% ke setiap harga
const hargaDenganPajak = hargaRupiah.map(harga => {
  return harga * 1.1;
});

console.log("Harga Asli        :", hargaRupiah);
console.log("Harga Plus Pajak  :", hargaDenganPajak);
