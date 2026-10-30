// Mutation Observer API: Memantau perubahan pada struktur DOM Tree

class MutationObserverSimulasi {
  constructor(callback) { this.callback = callback; }
  simulasiDOMBerubah(mutasi) {
    console.log("Perubahan struktur DOM terdeteksi.");
    this.callback([mutasi]);
  }
}

const observerDOM = new MutationObserverSimulasi((mutations) => {
  mutations.forEach(m => {
    console.log("Tipe Mutasi:", m.type, "| Elemen ditambahkan:", m.elemenBaru);
  });
});

observerDOM.simulasiDOMBerubah({ type: "childList", elemenBaru: "<div class='toast'>Pesan Baru</div>" });
