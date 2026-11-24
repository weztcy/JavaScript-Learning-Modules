// Implementasi Struktur Data Queue (FIFO: First In, First Out)

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(elemen) { this.items.push(elemen); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}

const q = new Queue();
q.enqueue("Pelanggan A");
q.enqueue("Pelanggan B");
q.enqueue("Pelanggan C");

console.log("Pelanggan pertama dilayani :", q.dequeue());
console.log("Pelanggan berikutnya di antrian:", q.front());
