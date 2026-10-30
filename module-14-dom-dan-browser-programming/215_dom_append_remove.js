// Menambah dan Menghapus Elemen: appendChild() dan remove()

class WadahDaftar {
  constructor() {
    this.items = [];
  }
  appendChild(elemen) {
    this.items.push(elemen);
    console.log("+ Ditambahkan ke DOM:", elemen);
  }
  removeChild(elemen) {
    const idx = this.items.indexOf(elemen);
    if (idx !== -1) {
      this.items.splice(idx, 1);
      console.log("- Dihapus dari DOM:", elemen);
    }
  }
}

const list = new WadahDaftar();
list.appendChild("Item 1: Belajar HTML");
list.appendChild("Item 2: Belajar CSS");
list.appendChild("Item 3: Belajar DOM");
list.removeChild("Item 2: Belajar CSS");
console.log("Daftar akhir:", list.items);
