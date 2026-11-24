// Closure: Kemampuan sebuah fungsi mengingat dan mempertahankan akses ke lingkup leksikalnya
// bahkan ketika fungsi tersebut dieksekusi di luar cakupan aslinya

function buatPenghitung() {
  let hitungan = 0; // Variabel privat yang dienkapsulasi

  return function() {
    hitungan++; // Mengingat variabel hitungan dari lingkup luar
    return hitungan;
  };
}

const counterA = buatPenghitung();
console.log("Counter A panggilan 1:", counterA());
console.log("Counter A panggilan 2:", counterA());
console.log("Counter A panggilan 3:", counterA());

const counterB = buatPenghitung();
console.log("Counter B panggilan 1 (terisolasi):", counterB());
