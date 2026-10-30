// ES Modules: Konsep Export Sintaks Standar ECMAScript (ESM)
// Pada file ESM terpisah (.mjs atau "type": "module"), kata kunci 'export' digunakan.

// Demonstrasi logika export modular
const konstantaAplikasi = {
  NAMA_APP: "Sistem Belajar JS",
  VERSI: "3.2.0"
};

function hitungPajak(nominal, tarif = 0.11) {
  return nominal * tarif;
}

// Objek representasi ekspor modul
const modulExportSimulasi = {
  konstantaAplikasi,
  hitungPajak
};

console.log("=== Konsep ES Modules Export ===");
console.log("Modul mengekspor komponen:", Object.keys(modulExportSimulasi));
console.log("Nama Aplikasi :", modulExportSimulasi.konstantaAplikasi.NAMA_APP);
console.log("Simulasi Pajak:", modulExportSimulasi.hitungPajak(100000));
