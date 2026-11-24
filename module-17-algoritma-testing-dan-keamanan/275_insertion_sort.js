// Algoritma Insertion Sort: Menyisipkan Elemen ke Posisi yang Tepat O(n^2)

function insertionSort(arr) {
  const hasil = [...arr];
  for (let i = 1; i < hasil.length; i++) {
    const kunci = hasil[i];
    let j = i - 1;

    while (j >= 0 && hasil[j] > kunci) {
      hasil[j + 1] = hasil[j];
      j--;
    }
    hasil[j + 1] = kunci;
  }
  return hasil;
}

const angkaList = [12, 11, 13, 5, 6];
console.log("Angka List      :", angkaList);
console.log("Insertion Sort  :", insertionSort(angkaList));
