// Metode slice(start, end) menyalin sebagian array tanpa mengubah array asli

const huruf = ["A", "B", "C", "D", "E", "F"];

// Mengambil elemen dari indeks 1 hingga sebelum indeks 4
const potongan = huruf.slice(1, 4);

console.log("Array asli tetap utuh:", huruf);
console.log("Hasil slice(1, 4)    :", potongan);
console.log("Slice dari akhir (-2):", huruf.slice(-2));
