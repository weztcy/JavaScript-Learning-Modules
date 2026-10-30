// Metode-metode Lengkap pada Map: set, get, has, delete, clear, forEach

const stokKategori = new Map();

stokKategori.set("Elektronik", 45);
stokKategori.set("Pakaian", 120);
stokKategori.set("Buku", 80);

console.log("Ukuran Map sebelum delete:", stokKategori.size);
stokKategori.delete("Pakaian");

console.log("Iterasi pasangan Map:");
stokKategori.forEach((jumlah, kategori) => {
  console.log("- " + kategori + " : " + jumlah + " unit");
});
