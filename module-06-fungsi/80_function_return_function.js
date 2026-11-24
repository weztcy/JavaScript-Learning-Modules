// Fungsi yang mengembalikan fungsi lain (Function Returning Function)

function pembuatPengali(faktor) {
  // Mengembalikan fungsi baru yang mengingat nilai 'faktor'
  return function(nilai) {
    return nilai * faktor;
  };
}

const kaliTiga = pembuatPengali(3);
const kaliSepuluh = pembuatPengali(10);

console.log("5 dikali 3  =", kaliTiga(5));
console.log("5 dikali 10 =", kaliSepuluh(5));
