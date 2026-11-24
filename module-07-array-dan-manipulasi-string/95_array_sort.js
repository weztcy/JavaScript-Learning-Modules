// Metode sort() mengurutkan elemen array secara in-place

const nama = ["Zaki", "Budi", "Citra", "Andi"];
nama.sort(); // Pengurutan alfabetis default
console.log("Urutan nama:", nama);

// Pengurutan angka memerlukan comparator function (a - b)
const angkaAcak = [40, 100, 1, 5, 25, 10];

angkaAcak.sort((a, b) => a - b); // Urutan ascending
console.log("Angka Ascending :", angkaAcak);

angkaAcak.sort((a, b) => b - a); // Urutan descending
console.log("Angka Descending:", angkaAcak);
