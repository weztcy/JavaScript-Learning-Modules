// Penggunaan Praktis WeakMap: Metadata Privat untuk Instance Objek

const metadataPrivat = new WeakMap();

class Widget {
  constructor(nama) {
    this.nama = nama;
    // Menyimpan state sensitif yang tidak bocor ke luar
    metadataPrivat.set(this, { klikCount: 0 });
  }

  klik() {
    const data = metadataPrivat.get(this);
    data.klikCount++;
    console.log(this.nama + " diklik. Total klik:", data.klikCount);
  }
}

const tombol = new Widget("Tombol Submit");
tombol.klik();
tombol.klik();
