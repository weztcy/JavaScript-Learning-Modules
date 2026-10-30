// Shallow Copy: Menyalin objek tingkat pertama, namun objek bersarang tetap berbagi referensi

const dataAsli = {
  id: 10,
  detail: { peran: "Editor" }
};

// Membuat shallow copy menggunakan spread operator
const salinanDangkal = { ...dataAsli };

// Mengubah properti tingkat pertama aman
salinanDangkal.id = 20;

// PENTING: Mengubah objek bersarang akan memengaruhi data asli!
salinanDangkal.detail.peran = "SuperAdmin";

console.log("ID Data Asli (aman)       :", dataAsli.id);
console.log("Peran Data Asli (terubah!):", dataAsli.detail.peran);
