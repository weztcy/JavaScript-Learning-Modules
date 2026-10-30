// Proyek 6: Sistem Pengelolaan Nilai Mahasiswa

class SistemNilaiMahasiswa {
  constructor() { this.mahasiswa = []; }
  tambahData(nama, nilai) {
    const grade = nilai >= 85 ? "A" : nilai >= 70 ? "B" : "C";
    this.mahasiswa.push({ nama, nilai, grade });
  }
  tampilkanLaporan() {
    console.log("Laporan Nilai:");
    this.mahasiswa.forEach(m => console.log("- " + m.nama + ": Nilai " + m.nilai + " (Grade " + m.grade + ")"));
  }
}

console.log("=== PROYEK: SISTEM NILAI MAHASISWA ===");
const sistem = new SistemNilaiMahasiswa();
sistem.tambahData("Hendra", 90);
sistem.tambahData("Laila", 78);
sistem.tampilkanLaporan();
