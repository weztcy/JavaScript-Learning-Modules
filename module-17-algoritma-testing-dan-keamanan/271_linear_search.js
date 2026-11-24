// Algoritma Linear Search: Pencarian Elemen Berurutan O(n)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target ditemukan pada indeks i
    }
  }
  return -1; // Target tidak ditemukan
}

const angka = [14, 25, 8, 42, 33, 91];
console.log("Array Data     :", angka);
console.log("Cari angka 42  : Indeks ke-" + linearSearch(angka, 42));
console.log("Cari angka 99  : Indeks ke-" + linearSearch(angka, 99));
