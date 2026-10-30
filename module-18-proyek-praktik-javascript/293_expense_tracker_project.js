// Proyek 5: Aplikasi Pencatatan Pengeluaran (Expense Tracker)

class ExpenseTracker {
  constructor() { this.transaksi = []; }
  catat(keterangan, nominal, kategori) {
    this.transaksi.push({ keterangan, nominal, kategori });
  }
  totalPengeluaran() {
    return this.transaksi.reduce((total, t) => total + t.nominal, 0);
  }
  laporan() {
    console.log("Total Pengeluaran: Rp " + this.totalPengeluaran().toLocaleString("id-ID"));
  }
}

console.log("=== PROYEK: EXPENSE TRACKER ===");
const tracker = new ExpenseTracker();
tracker.catat("Makan Siang", 35000, "Makanan");
tracker.catat("Bensin Motor", 25000, "Transportasi");
tracker.laporan();
