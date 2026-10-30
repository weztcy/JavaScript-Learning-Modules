// Prototype Chain: Rantai pencarian properti dari instance menuju Object.prototype

const kakek = { marga: "Kusuma" };
const ayah = Object.create(kakek);
ayah.pekerjaan = "Arsitek";

const anak = Object.create(ayah);
anak.nama = "Dimas";

console.log("Nama anak :", anak.nama);
console.log("Pekerjaan ayah diwarisi anak :", anak.pekerjaan);
console.log("Marga kakek diwarisi anak    :", anak.marga);
console.log("Prototype anak -> ayah -> kakek -> Object.prototype -> null");
