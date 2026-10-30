// Nullish Coalescing Operator (??)
// Mengembalikan operand kanan HANYA jika operand kiri bernilai null atau undefined

const portServer = null;
const portDefault = 3000;
const portAktif = portServer ?? portDefault;
console.log("Port yang digunakan:", portAktif); // 3000

// Perbedaan dengan operator OR (||):
// OR (||) menganggap angka 0 dan string kosong "" sebagai falsy, sedangkan ?? menganggapnya valid!
const jumlahTamu = 0;
const hasilOR = jumlahTamu || 10; // Menggantikan 0 dengan 10 (sering kali tidak diinginkan)
const hasilNullish = jumlahTamu ?? 10; // Tetap 0 karena 0 bukan null/undefined

console.log("Evaluasi dengan OR (||) :", hasilOR);
console.log("Evaluasi dengan ??      :", hasilNullish);
