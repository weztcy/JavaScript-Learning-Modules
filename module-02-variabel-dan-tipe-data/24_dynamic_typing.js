// JavaScript adalah bahasa yang bertipe dinamis (dynamically typed)
// Variabel tidak terikat secara permanen pada satu tipe data tertentu

let variabelFleksibel = "Awalnya adalah String";
console.log("1. Nilai:", variabelFleksibel, "| Tipe:", typeof variabelFleksibel);

variabelFleksibel = 999; // Diubah menjadi Number
console.log("2. Nilai:", variabelFleksibel, "| Tipe:", typeof variabelFleksibel);

variabelFleksibel = true; // Diubah menjadi Boolean
console.log("3. Nilai:", variabelFleksibel, "| Tipe:", typeof variabelFleksibel);

variabelFleksibel = { pesan: "Sekarang bertipe Object" };
console.log("4. Nilai:", variabelFleksibel, "| Tipe:", typeof variabelFleksibel);
