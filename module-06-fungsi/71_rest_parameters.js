// Rest Parameters (...args) mengumpulkan sisa argumen menjadi sebuah Array asli

function hitungRataRata(...daftarNilai) {
  // daftarNilai adalah sebuah array yang berisi semua argumen
  if (daftarNilai.length === 0) return 0;
  
  const total = daftarNilai.reduce((acc, curr) => acc + curr, 0);
  return total / daftarNilai.length;
}

console.log("Rata-rata (3 nilai):", hitungRataRata(80, 90, 85));
console.log("Rata-rata (5 nilai):", hitungRataRata(70, 75, 80, 85, 90));
