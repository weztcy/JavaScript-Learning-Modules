// Arrow Function (ES6) menyediakan sintaks deklarasi fungsi yang lebih ringkas
// Arrow function tidak memiliki binding 'this', 'arguments', atau 'super' sendiri

// Sintaks standar dengan blok kurung kurawal
const sapaPengguna = (nama) => {
  return "Selamat datang, " + nama + "!";
};

// Sintaks ringkas dengan implicit return untuk ekspresi satu baris
const kuadrat = x => x * x;

console.log(sapaPengguna("Dian"));
console.log("Kuadrat dari 9 adalah:", kuadrat(9));
