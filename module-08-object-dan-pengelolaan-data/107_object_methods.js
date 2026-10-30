// Menambahkan Method (Fungsi di dalam Objek) dan menggunakan kata kunci 'this'

const kalkulator = {
  angkaA: 20,
  angkaB: 5,
  tambah: function() {
    return this.angkaA + this.angkaB;
  },
  kali: function() {
    return this.angkaA * this.angkaB;
  }
};

console.log("Hasil Penjumlahan:", kalkulator.tambah());
console.log("Hasil Perkalian  :", kalkulator.kali());
