// Tipe data Symbol menghasilkan identifier yang selalu unik dan tidak dapat diubah (immutable)
// Umumnya digunakan sebagai kunci properti objek yang bersifat terisolasi / private

const idA = Symbol("id");
const idB = Symbol("id");

// Setiap pemanggilan Symbol() selalu menghasilkan nilai baru yang unik
console.log("Apakah idA identik dengan idB?", idA === idB); // false

// Menggunakan Symbol sebagai properti objek
const dataUser = {
  nama: "Rian",
  [idA]: 12345
};

console.log("Nama user:", dataUser.nama);
console.log("Akses via Symbol:", dataUser[idA]);
