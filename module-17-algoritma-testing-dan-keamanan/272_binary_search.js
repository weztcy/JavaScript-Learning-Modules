// Algoritma Binary Search: Pencarian pada Array Terurut O(log n)

function binarySearch(arr, target) {
  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri <= kanan) {
    const tengah = Math.floor((kiri + kanan) / 2);
    if (arr[tengah] === target) {
      return tengah;
    } else if (arr[tengah] < target) {
      kiri = tengah + 1; // Cari di separuh kanan
    } else {
      kanan = tengah - 1; // Cari di separuh kiri
    }
  }
  return -1;
}

const dataTerurut = [10, 20, 30, 40, 50, 60, 70, 80];
console.log("Data Terurut   :", dataTerurut);
console.log("Cari nilai 50  : Indeks ke-" + binarySearch(dataTerurut, 50));
