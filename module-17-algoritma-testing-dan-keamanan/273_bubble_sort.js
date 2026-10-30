// Algoritma Bubble Sort: Pengurutan dengan Menukar Elemen Bersebelahan O(n^2)

function bubbleSort(arr) {
  const hasil = [...arr];
  const n = hasil.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (hasil[j] > hasil[j + 1]) {
        // Tukar posisi elemen
        const temp = hasil[j];
        hasil[j] = hasil[j + 1];
        hasil[j + 1] = temp;
      }
    }
  }
  return hasil;
}

const acak = [64, 34, 25, 12, 22, 11, 90];
console.log("Array Acak     :", acak);
console.log("Hasil Bubble Sort:", bubbleSort(acak));
