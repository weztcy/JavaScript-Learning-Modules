// JavaScript bersifat case-sensitive (membedakan huruf besar dan huruf kecil)

// Dua variabel berikut adalah entitas yang sepenuhnya berbeda
let namaKota = "Jakarta";
let Namakota = "Surabaya";
let NAMAKOTA = "Bandung";

console.log("namaKota :", namaKota);
console.log("Namakota :", Namakota);
console.log("NAMAKOTA :", NAMAKOTA);

// Aturan penamaan: CamelCase lazim digunakan untuk variabel dan fungsi
function hitungVolumeBalok(panjangBalok, lebarBalok, tinggiBalok) {
  // Huruf besar/kecil pada parameter harus dipanggil secara konsisten
  return panjangBalok * lebarBalok * tinggiBalok;
}

console.log("Volume Balok:", hitungVolumeBalok(4, 5, 2));
