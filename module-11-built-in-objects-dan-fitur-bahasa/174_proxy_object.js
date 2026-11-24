// Proxy: Mengintersepsi dan memodifikasi operasi fundamental pada objek (get, set, dll)

const target = { nama: "Galih", usia: 20 };

const handler = {
  get: function(obj, properti) {
    if (properti in obj) {
      return obj[properti];
    }
    return "Properti '" + properti + "' tidak ditemukan!";
  },
  set: function(obj, properti, nilai) {
    if (properti === "usia" && (typeof nilai !== "number" || nilai < 0)) {
      throw new Error("Usia harus berupa angka positif!");
    }
    obj[properti] = nilai;
    return true;
  }
};

const proxyUser = new Proxy(target, handler);
console.log("Nama :", proxyUser.nama);
console.log("Email:", proxyUser.email); // Properti tidak ada dicegat oleh handler get
proxyUser.usia = 25;
console.log("Usia baru:", proxyUser.usia);
