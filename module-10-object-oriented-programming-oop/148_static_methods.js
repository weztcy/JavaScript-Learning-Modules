// Static Methods: Method yang menempel pada Class itu sendiri, bukan pada instance

class Geometri {
  // Method statis tidak membutuhkan instansiasi 'new Geometri()'
  static luasPersegi(sisi) {
    return sisi * sisi;
  }

  static luasLingkaran(r) {
    return Math.PI * r * r;
  }
}

console.log("Luas Persegi (sisi 8)       =", Geometri.luasPersegi(8));
console.log("Luas Lingkaran (radius 7)   =", Geometri.luasLingkaran(7).toFixed(2));
