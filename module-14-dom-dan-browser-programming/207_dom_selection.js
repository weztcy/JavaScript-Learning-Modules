// Memilih Elemen DOM: getElementById dan getElementsByClassName
// Demonstrasi konsep DOM API yang kompatibel dengan browser maupun simulasi runtime

// Mock representasi Document Object Model sederhana untuk eksekusi konsisten
function simulasiDOM() {
  return {
    getElementById: (id) => ({ id: id, tagName: "DIV", innerText: "Konten ID " + id }),
    getElementsByClassName: (cls) => [
      { className: cls, innerText: "Item A (" + cls + ")" },
      { className: cls, innerText: "Item B (" + cls + ")" }
    ]
  };
}

const doc = (typeof document !== "undefined") ? document : simulasiDOM();

console.log("=== Memilih Elemen DOM Tradisional ===");
const judulUtama = doc.getElementById("judul-halaman");
console.log("Elemen terpilih via ID      :", judulUtama.tagName, "->", judulUtama.innerText);

const daftarKartu = doc.getElementsByClassName("card-item");
console.log("Jumlah elemen class terpilih:", daftarKartu.length);
console.log("Item pertama                :", daftarKartu[0].innerText);
