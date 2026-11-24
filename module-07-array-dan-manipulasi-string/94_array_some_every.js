// Metode some() dan every() untuk validasi kondisi kumpulan data

const nilaiUjian = [75, 80, 65, 90, 85];

// every(): bernilai true jika SEMUA elemen lolos kriteria
const semuaLulus = nilaiUjian.every(n => n >= 60);
console.log("Apakah semua siswa lulus (>= 60)?", semuaLulus);

// some(): bernilai true jika MINIMAL SATU elemen lolos kriteria
const adaYangSempurna = nilaiUjian.some(n => n === 100);
console.log("Apakah ada siswa yang bernilai 100?", adaYangSempurna);
