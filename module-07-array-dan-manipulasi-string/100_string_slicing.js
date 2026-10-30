// Pemotongan String menggunakan slice() dan substring()

const kalimat = "JavaScript adalah bahasa web";

// slice(start, end)
console.log("Potongan kata depan :", kalimat.slice(0, 10)); // "JavaScript"
console.log("Kata terakhir       :", kalimat.slice(-3));    // "web"

// substring(start, end)
console.log("Kata tengah         :", kalimat.substring(11, 17)); // "adalah"
