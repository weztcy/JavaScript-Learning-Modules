// Melempar Error Secara Eksplisit menggunakan kata kunci 'throw'

function hitungAkar(angka) {
  if (angka < 0) {
    // Melempar objek Error baru jika input melanggar aturan logika
    throw new RangeError("Nilai tidak boleh negatif untuk operasi akar kuadrat real!");
  }
  return Math.sqrt(angka);
}

try {
  console.log("Akar 25  =", hitungAkar(25));
  console.log("Akar -9  =", hitungAkar(-9)); // Memicu throw
} catch (err) {
  console.log("[PENANGANAN ERROR]:", err.name + " -> " + err.message);
}
