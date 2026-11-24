// Computed Property Names: Menentukan nama kunci properti objek secara dinamis saat runtime

const prefiks = "user_";
const namaKunci = "status";

const dataDinamis = {
  [prefiks + "id"]: 9921,
  [prefiks + "name"]: "Gunawan",
  [namaKunci]: "Aktif"
};

console.log("Objek dengan Kunci Dinamis:", dataDinamis);
console.log("Akses user_id:", dataDinamis.user_id);
