// Program Penentuan Predikat Nilai Siswa (Grade Calculator)

function hitungGrade(nilai) {
  if (nilai < 0 || nilai > 100) {
    return "Nilai tidak valid! Masukkan rentang 0 - 100.";
  }
  
  if (nilai >= 85) {
    return "A (Sangat Memuaskan)";
  } else if (nilai >= 75) {
    return "B (Memuaskan)";
  } else if (nilai >= 60) {
    return "C (Cukup)";
  } else if (nilai >= 50) {
    return "D (Kurang)";
  } else {
    return "E (Gagal)";
  }
}

const daftarNilai = [95, 82, 70, 55, 30];
console.log("=== Sistem Perhitungan Nilai Siswa ===");
daftarNilai.forEach(n => {
  console.log("Nilai:", n, "-> Grade:", hitungGrade(n));
});
