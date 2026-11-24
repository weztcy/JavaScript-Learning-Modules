// Memilih Elemen Menggunakan querySelector() dan querySelectorAll() dengan CSS Selectors

function simulasiQuerySelector() {
  return {
    querySelector: (sel) => ({ selector: sel, textContent: "Elemen tunggal untuk " + sel }),
    querySelectorAll: (sel) => [
      { selector: sel, textContent: "Item 1" },
      { selector: sel, textContent: "Item 2" },
      { selector: sel, textContent: "Item 3" }
    ]
  };
}

const doc = (typeof document !== "undefined") ? document : simulasiQuerySelector();

console.log("=== Query Selector Modern ===");
const tombolSubmit = doc.querySelector("button.btn-primary");
console.log("Hasil querySelector    :", tombolSubmit.textContent);

const listNavigasi = doc.querySelectorAll("nav > ul > li");
console.log("Hasil querySelectorAll :", listNavigasi.length, "elemen ditemukan.");
