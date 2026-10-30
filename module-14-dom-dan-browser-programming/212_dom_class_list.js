// Manipulasi Class CSS Menggunakan classList: add, remove, toggle, contains

class ClassListSimulasi {
  constructor() {
    this.classes = new Set();
  }
  add(...cls) { cls.forEach(c => this.classes.add(c)); }
  remove(cls) { this.classes.delete(cls); }
  toggle(cls) {
    if (this.classes.has(cls)) { this.classes.delete(cls); return false; }
    this.classes.add(cls); return true;
  }
  contains(cls) { return this.classes.has(cls); }
  toString() { return Array.from(this.classes).join(" "); }
}

const box = new ClassListSimulasi();
box.add("card", "shadow", "rounded");
console.log("Class awal  :", box.toString());

box.remove("shadow");
console.log("Setelah hapus 'shadow':", box.toString());

box.toggle("active");
console.log("Setelah toggle 'active':", box.toString());
console.log("Apakah punya class 'card'?", box.contains("card"));
