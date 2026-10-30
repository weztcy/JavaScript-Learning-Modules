// Mengakses dan Memodifikasi Properti Objek: Dot notation vs Bracket notation

const karyawan = {
  "nama-lengkap": "Siti Nurhaliza",
  posisi: "Data Analyst",
  gaji: 8500000
};

// Dot notation untuk properti dengan nama identifier standar
console.log("Posisi:", karyawan.posisi);

// Bracket notation wajib untuk properti dengan karakter khusus seperti tanda hubung
console.log("Nama  :", karyawan["nama-lengkap"]);

// Menambah properti baru dan menghapus properti lama
karyawan.departemen = "Keuangan";
delete karyawan.gaji;

console.log("Objek setelah diperbarui:", karyawan);
