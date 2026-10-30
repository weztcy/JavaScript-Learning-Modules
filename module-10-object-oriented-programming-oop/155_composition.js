// Composition: Menggabungkan objek-objek kecil untuk membentuk objek yang lebih besar ("has-a" relationship)

class Mesin {
  hidupkan() {
    return "Mesin V8 menyala bertenaga.";
  }
}

class Roda {
  putar() {
    return "4 Roda berputar harmonis.";
  }
}

class MobilBalap {
  constructor() {
    // Mobil tersusun atas mesin dan roda
    this.mesin = new Mesin();
    this.roda = new Roda();
  }

  pacu() {
    console.log(this.mesin.hidupkan());
    console.log(this.roda.putar());
    console.log("Mobil melesat di sirkuit!");
  }
}

const mobil = new MobilBalap();
mobil.pacu();
