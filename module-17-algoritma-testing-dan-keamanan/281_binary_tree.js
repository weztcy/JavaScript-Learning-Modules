// Implementasi Binary Search Tree (BST): Penelusuran Pohon Biner

class TreeNode {
  constructor(nilai) {
    this.nilai = nilai;
    this.kiri = null;
    this.kanan = null;
  }
}

class BST {
  constructor() { this.root = null; }
  insert(nilai) {
    const nodeBaru = new TreeNode(nilai);
    if (!this.root) { this.root = nodeBaru; return; }
    this._insertNode(this.root, nodeBaru);
  }
  _insertNode(node, nodeBaru) {
    if (nodeBaru.nilai < node.nilai) {
      if (!node.kiri) node.kiri = nodeBaru;
      else this._insertNode(node.kiri, nodeBaru);
    } else {
      if (!node.kanan) node.kanan = nodeBaru;
      else this._insertNode(node.kanan, nodeBaru);
    }
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
console.log("BST Root     :", bst.root.nilai);
console.log("Cabang Kiri  :", bst.root.kiri.nilai);
console.log("Cabang Kanan :", bst.root.kanan.nilai);
