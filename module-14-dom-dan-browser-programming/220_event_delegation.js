// Event Delegation: Memasang satu event listener pada elemen parent untuk menangani seluruh children

const elemenParentList = {
  tanganiKlikAnak: function(event) {
    // Mengecek apakah elemen yang diklik adalah item daftar (li)
    if (event.target && event.target.tagName === "LI") {
      console.log("Item berhasil dipilih:", event.target.textContent);
    }
  }
};

console.log("=== Demonstrasi Event Delegation ===");
elemenParentList.tanganiKlikAnak({ target: { tagName: "LI", textContent: "Pilihan 1: Paket Basic" } });
elemenParentList.tanganiKlikAnak({ target: { tagName: "LI", textContent: "Pilihan 2: Paket Pro" } });
