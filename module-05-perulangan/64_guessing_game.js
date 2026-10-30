// Program Simulasi Permainan Tebak Angka

function jalankanPermainanTebakAngka(angkaRahasia, daftarTebakan) {
  console.log("=== Permainan Tebak Angka (1 - 100) ===");
  console.log("Angka rahasia telah ditentukan sistem.");

  for (let i = 0; i < daftarTebakan.length; i++) {
    const tebakan = daftarTebakan[i];
    console.log("\nPercobaan ke-" + (i + 1) + ": Menebak angka " + tebakan);

    if (tebakan === angkaRahasia) {
      console.log("HEBAT! Tebakan Anda BENAR! Angka rahasianya adalah " + angkaRahasia + ".");
      break;
    } else if (tebakan < angkaRahasia) {
      console.log("Tebakan Anda terlalu KECIL. Coba angka yang lebih besar.");
    } else {
      console.log("Tebakan Anda terlalu BESAR. Coba angka yang lebih kecil.");
    }
  }
}

// Simulasi pemain mencoba menebak angka rahasia 42
jalankanPermainanTebakAngka(42, [20, 60, 35, 42]);
