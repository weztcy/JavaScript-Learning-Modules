// Metode shift() dan unshift() untuk manipulasi di awal Array

const antrian = ["Pasien 2", "Pasien 3"];
console.log("Antrian awal:", antrian);

// unshift() menyisipkan elemen ke indeks pertama (awal array)
antrian.unshift("Pasien 1");
console.log("Setelah unshift('Pasien 1'):", antrian);

// shift() menghapus dan mengembalikan elemen pertama dari array
const dilayani = antrian.shift();
console.log("Pasien yang dilayani (shift):", dilayani);
console.log("Sisa antrian                :", antrian);
