// Proyek 3: Aplikasi Kuis Interaktif dengan Kalkulasi Skor dan Evaluasi Jawaban

class KuisApp {
  constructor(soalList) {
    this.soalList = soalList;
    this.skor = 0;
  }

  jawab(indeksSoal, pilihan) {
    const soal = this.soalList[indeksSoal];
    if (soal.kunci === pilihan) {
      this.skor += 10;
      console.log("Soal #" + (indeksSoal + 1) + ": Benar! (+10 poin)");
    } else {
      console.log("Soal #" + (indeksSoal + 1) + ": Salah!");
    }
  }

  tampilkanHasil() {
    console.log("Skor Akhir:", this.skor, "dari", this.soalList.length * 10, "poin.");
  }
}

const daftarSoal = [
  { tanya: "Tipe data angka di JS?", kunci: "Number" },
  { tanya: "Kata kunci variabel modern?", kunci: "let" }
];

console.log("=== PROYEK: APLIKASI KUIS ===");
const kuis = new KuisApp(daftarSoal);
kuis.jawab(0, "Number");
kuis.jawab(1, "let");
kuis.tampilkanHasil();
