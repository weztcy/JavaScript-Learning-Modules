// Pengindeksan Array (Zero-based indexing)

const hewan = ["Kucing", "Anjing", "Kelinci", "Hamster"];

// Mengakses elemen berdasarkan indeks (mulai dari 0)
console.log("Elemen pertama (indeks 0):", hewan[0]);
console.log("Elemen ketiga  (indeks 2):", hewan[2]);

// Mengakses elemen terakhir menggunakan properti length - 1 atau at(-1)
console.log("Elemen terakhir          :", hewan[hewan.length - 1]);
console.log("Menggunakan metode at(-1):", hewan.at(-1));

// Mengubah elemen pada indeks tertentu
hewan[1] = "Serigala";
console.log("Array setelah mutasi indeks 1:", hewan);
