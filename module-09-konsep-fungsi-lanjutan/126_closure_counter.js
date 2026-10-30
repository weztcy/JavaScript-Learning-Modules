// Penerapan Closure Lanjutan: Modul Counter dengan Method Publik

function buatSistemAntrian(awalan) {
  let nomor = 0; // State privat yang terenkapsulasi

  return {
    berikutnya: function() {
      nomor++;
      return awalan + "-" + String(nomor).padStart(3, "0");
    },
    lihatSekarang: function() {
      return nomor;
    },
    reset: function() {
      nomor = 0;
      console.log("Nomor antrian berhasil di-reset ke 0.");
    }
  };
}

const tellerA = buatSistemAntrian("A");
console.log("Tiket 1:", tellerA.berikutnya());
console.log("Tiket 2:", tellerA.berikutnya());
console.log("Tiket 3:", tellerA.berikutnya());
console.log("Jumlah antrian berjalan:", tellerA.lihatSekarang());
