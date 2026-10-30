// Default Exports: Setiap modul hanya boleh memiliki MAKSIMAL SATU default export

class LayananPengguna {
  constructor() {
    this.penggunaAktif = ["Admin", "Operator"];
  }

  ambilDaftar() {
    return this.penggunaAktif;
  }
}

// Representasi default export: 'export default LayananPengguna;'
const defaultExportSimulasi = LayananPengguna;

console.log("=== Default Export ===");
const layanan = new defaultExportSimulasi();
console.log("Daftar Pengguna dari Default Export:", layanan.ambilDaftar());
