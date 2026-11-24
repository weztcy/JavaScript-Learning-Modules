// Proyek 7: Sistem Manajemen Inventaris Barang

class InventarisBarang {
  constructor() { this.stok = new Map(); }
  tambahStok(sku, nama, jumlah) {
    this.stok.set(sku, { nama, jumlah });
  }
  kurangStok(sku, jumlah) {
    const item = this.stok.get(sku);
    if (item && item.jumlah >= jumlah) item.jumlah -= jumlah;
  }
  cetakLaporan() {
    console.log("Stok Inventaris:");
    this.stok.forEach((val, key) => console.log(key + ": " + val.nama + " (" + val.jumlah + " unit)"));
  }
}

console.log("=== PROYEK: MANAJEMEN INVENTARIS ===");
const inv = new InventarisBarang();
inv.tambahStok("SKU-01", "Keyboard Mekanikal", 20);
inv.kurangStok("SKU-01", 3);
inv.cetakLaporan();
