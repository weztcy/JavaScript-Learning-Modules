// Implementasi Singly Linked List: Rangkaian Node Berantai

class Node {
  constructor(nilai) {
    this.nilai = nilai;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  tambah(nilai) {
    const nodeBaru = new Node(nilai);
    if (!this.head) {
      this.head = nodeBaru;
      return;
    }
    let saatIni = this.head;
    while (saatIni.next) {
      saatIni = saatIni.next;
    }
    saatIni.next = nodeBaru;
  }

  cetak() {
    const list = [];
    let saatIni = this.head;
    while (saatIni) {
      list.push(saatIni.nilai);
      saatIni = saatIni.next;
    }
    return list.join(" -> ") + " -> null";
  }
}

const ll = new LinkedList();
ll.tambah(10);
ll.tambah(20);
ll.tambah(30);
console.log("Isi Linked List:", ll.cetak());
