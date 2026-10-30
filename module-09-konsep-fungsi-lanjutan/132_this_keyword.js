// Memahami Konteks 'this' dalam JavaScript

const mobil = {
  merek: "Toyota",
  kecepatan: 0,
  gas: function(tambahan) {
    // 'this' merujuk ke objek mobil saat metode dipanggil
    this.kecepatan += tambahan;
    console.log(this.merek + " melaju dengan kecepatan: " + this.kecepatan + " km/jam");
  }
};

mobil.gas(40);
mobil.gas(20);
