// Program Tabel Perkalian Interaktif

function tampilkanTabelPerkalian(angkaDasar, batasMaksimal) {
  console.log("=== Tabel Perkalian " + angkaDasar + " ===");
  for (let i = 1; i <= batasMaksimal; i++) {
    const hasil = angkaDasar * i;
    console.log(angkaDasar + " x " + i + " = " + hasil);
  }
}

tampilkanTabelPerkalian(7, 5);
