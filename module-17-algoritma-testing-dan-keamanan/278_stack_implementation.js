// Implementasi Struktur Data Stack (LIFO: Last In, First Out)

class Stack {
  constructor() {
    this.items = [];
  }
  push(elemen) { this.items.push(elemen); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}

const s = new Stack();
s.push("Halaman 1");
s.push("Halaman 2");
s.push("Halaman 3");

console.log("Elemen teratas (peek):", s.peek());
console.log("Diambil (pop)        :", s.pop());
console.log("Ukuran stack tersisa :", s.size());
