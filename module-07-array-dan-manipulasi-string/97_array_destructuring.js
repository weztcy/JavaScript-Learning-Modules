// Array Destructuring (ES6) mengekstrak nilai array ke dalam variabel individual

const koordinat = [107.6191, -6.9175, 768];

// Destrukturisasi dengan nama variabel yang deskriptif
const [bujur, lintang, ketinggian] = koordinat;

console.log("Bujur (Longitude) :", bujur);
console.log("Lintang (Latitude):", lintang);
console.log("Ketinggian (mdpl) :", ketinggian);

// Mengabaikan elemen tertentu dengan koma kosong
const [warnaUtama, , warnaKetiga] = ["Merah", "Hijau", "Biru"];
console.log("Warna utama dan ketiga:", warnaUtama, "dan", warnaKetiga);
