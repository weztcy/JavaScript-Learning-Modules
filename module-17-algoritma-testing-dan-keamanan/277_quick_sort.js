// Algoritma Quick Sort: Mengurutkan Berdasarkan Elemen Pivot O(n log n)

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const lebihKecil = [];
  const lebihBesar = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      lebihKecil.push(arr[i]);
    } else {
      lebihBesar.push(arr[i]);
    }
  }

  return [...quickSort(lebihKecil), pivot, ...quickSort(lebihBesar)];
}

const nilai = [10, 80, 30, 90, 40, 50, 70];
console.log("Nilai Awal  :", nilai);
console.log("Quick Sort  :", quickSort(nilai));
