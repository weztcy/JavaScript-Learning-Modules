// Algoritma Merge Sort: Pendekatan Divide and Conquer O(n log n)

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const tengah = Math.floor(arr.length / 2);
  const kiri = mergeSort(arr.slice(0, tengah));
  const kanan = mergeSort(arr.slice(tengah));

  return gabung(kiri, kanan);
}

function gabung(kiri, kanan) {
  const hasil = [];
  let i = 0, j = 0;

  while (i < kiri.length && j < kanan.length) {
    if (kiri[i] < kanan[j]) {
      hasil.push(kiri[i++]);
    } else {
      hasil.push(kanan[j++]);
    }
  }
  return hasil.concat(kiri.slice(i)).concat(kanan.slice(j));
}

const dataAcak = [38, 27, 43, 3, 9, 82, 10];
console.log("Data Acak   :", dataAcak);
console.log("Merge Sort  :", mergeSort(dataAcak));
