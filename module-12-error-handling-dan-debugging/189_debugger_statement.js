// Pernyataan 'debugger': Berfungsi sebagai breakpoint otomatis
// saat program dijalankan dengan developer tools atau Node inspector (node inspect)

function hitungKompleks(a, b) {
  const hasilKali = a * b;
  
  // Jika debugger aktif, eksekusi akan dijeda di titik ini
  debugger;
  
  const hasilAkhir = hasilKali + 10;
  return hasilAkhir;
}

console.log("Menjalankan fungsi yang memiliki pernyataan debugger...");
const output = hitungKompleks(5, 4);
console.log("Hasil komputasi:", output);
