// History API: Manipulasi riwayat navigasi peramban (pushState, back, forward)

const historySimulasi = {
  stack: ["/home"],
  pushState: function(state, title, url) {
    this.stack.push(url);
    console.log("Navigasi ke URL baru tanpa reload:", url);
  },
  back: function() {
    this.stack.pop();
    console.log("Kembali ke URL:", this.stack[this.stack.length - 1]);
  }
};

console.log("=== History API ===");
historySimulasi.pushState({}, "", "/produk/102");
historySimulasi.pushState({}, "", "/keranjang");
historySimulasi.back();
