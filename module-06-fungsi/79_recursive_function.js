// Recursive Function: Fungsi yang memanggil dirinya sendiri sampai mencapai base case

function hitungFaktorialRekursif(n) {
  // Base case: kondisi penghenti rekursi
  if (n <= 1) {
    return 1;
  }
  // Recursive step: n * faktorial(n - 1)
  return n * hitungFaktorialRekursif(n - 1);
}

console.log("Faktorial rekursif 5! =", hitungFaktorialRekursif(5));
console.log("Faktorial rekursif 6! =", hitungFaktorialRekursif(6));
