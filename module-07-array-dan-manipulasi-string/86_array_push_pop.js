// Metode push() dan pop() untuk operasi di akhir Array (perilaku Stack LIFO)

const tumpukanBuku = ["Buku A", "Buku B"];
console.log("Kondisi awal:", tumpukanBuku);

// push() menambahkan elemen ke akhir array dan mengembalikan panjang baru
tumpukanBuku.push("Buku C");
tumpukanBuku.push("Buku D");
console.log("Setelah push():", tumpukanBuku);

// pop() menghapus dan mengembalikan elemen paling terakhir
const bukuTerambil = tumpukanBuku.pop();
console.log("Elemen yang di-pop:", bukuTerambil);
console.log("Setelah pop()      :", tumpukanBuku);
