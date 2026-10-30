// Regex Capturing Groups: Mengelompokkan dan mengekstrak segmen teks

const polaTanggal = /(\d{4})-(\d{2})-(\d{2})/;
const teksInput = "Tanggal peluncuran: 2026-10-17.";

const match = teksInput.match(polaTanggal);
if (match) {
  const [lengkap, tahun, bulan, hari] = match;
  console.log("Pola Lengkap :", lengkap);
  console.log("Tahun        :", tahun);
  console.log("Bulan        :", bulan);
  console.log("Hari         :", hari);
}
