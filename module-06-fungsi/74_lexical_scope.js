// Lexical Scope: Fungsi anak memiliki akses ke variabel yang dideklarasikan pada lingkup induknya

function lingkupLuar() {
  const rahasia = "Kunci-Enkripsi-123";

  function lingkupDalam() {
    // Fungsi dalam dapat mengakses variabel 'rahasia' milik fungsi luar
    console.log("Akses variabel induk dari fungsi dalam:", rahasia);
  }

  lingkupDalam();
}

lingkupLuar();
