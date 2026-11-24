// Aggregation: Hubungan kepemilikan lemah di mana objek komponen dapat hidup mandiri tanpa objek pemilik

class Dosen {
  constructor(nama) {
    this.nama = nama;
  }
}

class Jurusan {
  constructor(namaJurusan) {
    this.namaJurusan = namaJurusan;
    this.daftarDosen = []; // Kumpulan referensi dosen
  }

  tambahDosen(dosen) {
    this.daftarDosen.push(dosen);
  }
}

const d1 = new Dosen("Dr. Budi Santoso");
const j1 = new Jurusan("Teknik Informatika");
j1.tambahDosen(d1);

console.log("Jurusan:", j1.namaJurusan);
console.log("Dosen terdaftar:", j1.daftarDosen[0].nama);
