// Algoritma Selection Sort: Mencari Nilai Minimum dan Meletakkannya di Depan O(n^2)

function selectionSort(arr) {
  const hasil = [...arr];
  const n = hasil.length;

  for (let i = 0; i < n - 1; i++) {
    let indeksMin = i;
    for (let j = i + 1; j < n; j++) {
      if (hasil[j] < hasil[indeksMin]) {
        indeksMin = j;
      }
    }
    if (indeksMin !== i) {
      const temp = hasil[i];
      hasil[i] = hasil[indeksMin];
      hasil[indeksMin] = temp;
    }
  }
  return hasil;
}

const data = [29, 10, 14, 37, 13];
console.log("Data Awal       :", data);
console.log("Selection Sort  :", selectionSort(data));
