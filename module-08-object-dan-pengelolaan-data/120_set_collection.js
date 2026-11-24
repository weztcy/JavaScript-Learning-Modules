// Struktur Data Set: Koleksi nilai unik (setiap nilai hanya boleh muncul satu kali)

const himpunanAngka = new Set([1, 2, 3, 2, 1, 4, 5, 4]);

console.log("Isi Set (Otomatis Unik):", Array.from(himpunanAngka));
console.log("Ukuran Set             :", himpunanAngka.size);

himpunanAngka.add(6);
console.log("Apakah ada angka 3?    :", himpunanAngka.has(3));
