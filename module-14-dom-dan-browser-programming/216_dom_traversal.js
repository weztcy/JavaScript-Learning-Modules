// DOM Traversal: Menavigasi pohon elemen (parentNode, children, nextSibling)

const pohonNavigasi = {
  nama: "navbar",
  parentNode: "body",
  children: [
    { nama: "logo", nextElementSibling: "menu-items" },
    { nama: "menu-items", previousElementSibling: "logo" }
  ]
};

console.log("=== Navigasi Pohon DOM (Traversal) ===");
console.log("Elemen Saat Ini        :", pohonNavigasi.nama);
console.log("Parent Node            :", pohonNavigasi.parentNode);
console.log("Jumlah Children        :", pohonNavigasi.children.length);
console.log("Elemen Anak Pertama    :", pohonNavigasi.children[0].nama);
console.log("Next Sibling Anak Ke-1 :", pohonNavigasi.children[0].nextElementSibling);
