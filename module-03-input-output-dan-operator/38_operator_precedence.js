// Prioritas Operator (Operator Precedence) menentukan urutan kalkulasi ekspresi

// Perkalian (*) memiliki prioritas lebih tinggi daripada penjumlahan (+)
const hasilA = 5 + 3 * 2; // 5 + 6 = 11
console.log("5 + 3 * 2      =", hasilA);

// Tanda kurung () memiliki prioritas tertinggi untuk mengubah urutan evaluasi
const hasilB = (5 + 3) * 2; // 8 * 2 = 16
console.log("(5 + 3) * 2    =", hasilB);

// Evaluasi logika dan perbandingan
const hasilLogika = 10 > 5 && 3 < 8; // (10 > 5) dievaluasi dulu, lalu (3 < 8), lalu &&
console.log("10 > 5 && 3 < 8 =", hasilLogika);
