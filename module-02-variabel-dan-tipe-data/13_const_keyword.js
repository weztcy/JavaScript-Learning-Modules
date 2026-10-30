// Deklarasi konstanta dengan kata kunci 'const' (ES6+)
// Nilai 'const' wajib diinisialisasi saat deklarasi dan tidak dapat di-reassign

const PHI = 3.14159;
const URL_API = "https://api.belajarjs.org/v1";

console.log("Nilai konstanta PHI:", PHI);
console.log("Nilai konstanta URL_API:", URL_API);

// PENTING: Pada tipe data referensi (object dan array), 'const' mengunci referensinya,
// namun properti atau elemen di dalamnya tetap dapat dimutasi.
const pengguna = {
  id: 101,
  nama: "Sinta"
};

// Mengubah isi properti objek diperbolehkan
pengguna.nama = "Sinta Permata";
pengguna.role = "Developer";
console.log("Objek const setelah properti diubah:", pengguna);
