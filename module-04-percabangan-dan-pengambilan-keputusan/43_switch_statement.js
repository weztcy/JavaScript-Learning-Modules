// Percabangan 'switch' cocok untuk mengevaluasi satu variabel terhadap banyak nilai konstan

const kodeHari = 3;
let namaHari = "";

switch (kodeHari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  case 7:
    namaHari = "Minggu";
    break;
  default:
    namaHari = "Kode hari tidak valid (gunakan 1 - 7)";
}

console.log("Kode Hari:", kodeHari);
console.log("Nama Hari:", namaHari);
