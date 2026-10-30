// Getter dan Setter: Mengontrol akses dan validasi saat membaca atau menulis properti

class Suhu {
  constructor(celsius) {
    this._celsius = celsius;
  }

  // Getter: membaca nilai seolah-olah properti biasa
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }

  // Setter: memvalidasi sebelum menyimpan nilai
  set celsius(nilaiBaru) {
    if (nilaiBaru < -273.15) {
      console.log("Suhu tidak boleh di bawah nol mutlak!");
      return;
    }
    this._celsius = nilaiBaru;
  }

  get celsius() {
    return this._celsius;
  }
}

const t = new Suhu(25);
console.log("Suhu Celsius   :", t.celsius, "°C");
console.log("Suhu Fahrenheit:", t.fahrenheit, "°F");
t.celsius = 30;
console.log("Setelah diubah :", t.fahrenheit, "°F");
