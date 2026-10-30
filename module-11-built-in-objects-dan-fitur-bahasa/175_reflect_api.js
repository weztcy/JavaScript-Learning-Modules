// Reflect API: Menyediakan metode untuk operasi objek yang dapat diintersepsi secara konsisten

const buku = { judul: "Belajar ECMAScript", tahun: 2024 };

// Menggunakan Reflect.get dan Reflect.set
console.log("Ambil judul :", Reflect.get(buku, "judul"));
Reflect.set(buku, "penulis", "Ferry");
console.log("Setelah set :", buku);

// Memeriksa keberadaan properti dengan Reflect.has
console.log("Punya tahun?:", Reflect.has(buku, "tahun"));
