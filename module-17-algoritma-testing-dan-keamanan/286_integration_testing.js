// Integration Testing: Menguji Interaksi Antara Beberapa Komponen Sistem

class GudangBarang {
  constructor() { this.stok = 5; }
  kurangiStok(jumlah) { this.stok -= jumlah; }
}

class Kasir {
  prosesCheckout(gudang, jumlah) {
    if (gudang.stok < jumlah) return false;
    gudang.kurangiStok(jumlah);
    return true;
  }
}

// Uji Integrasi Kasir & Gudang
const gudang = new GudangBarang();
const kasir = new Kasir();

const transaksi1 = kasir.prosesCheckout(gudang, 3);
console.log("Transaksi 1 sukses?", transaksi1, "| Sisa Stok:", gudang.stok);

const transaksi2 = kasir.prosesCheckout(gudang, 4);
console.log("Transaksi 2 sukses (stok kurang)?", transaksi2, "| Sisa Stok:", gudang.stok);
