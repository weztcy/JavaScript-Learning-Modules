// Symbol sebagai Properti Objek dan Class (Metaprogramming & Enkapsulasi Ringan)

const kunciPrivat = Symbol("dataSensitif");

class Pasien {
  constructor(nama, riwayatPenyakit) {
    this.nama = nama;
    this[kunciPrivat] = riwayatPenyakit; // Disimpan dengan kunci Symbol unik
  }

  ambilRiwayat() {
    return this[kunciPrivat];
  }
}

const p = new Pasien("Hendra", "Alergi Debu");
console.log("Nama Pasien    :", p.nama);
console.log("Riwayat Medis  :", p.ambilRiwayat());
console.log("Object.keys(p) :", Object.keys(p)); // Kunci symbol tidak muncul di loop keys biasa
