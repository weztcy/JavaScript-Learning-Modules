// JSON.stringify(): Mengubah objek JavaScript menjadi string berformat JSON

const dataUser = {
  id: 101,
  nama: "Lestari",
  hobi: ["Membaca", "Fotografi"],
  aktif: true
};

// Stringify standar
const jsonKompak = JSON.stringify(dataUser);
console.log("JSON Kompak:", jsonKompak);

// Stringify dengan indentasi cantik (pretty print)
const jsonCantik = JSON.stringify(dataUser, null, 2);
console.log("JSON Rapi:\n" + jsonCantik);
