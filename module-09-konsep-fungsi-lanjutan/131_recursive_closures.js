// Kombinasi Rekursi dan Closure untuk Menelusuri Pohon Data (Tree Traversal)

function buatPenelusurPohon() {
  let hitunganNode = 0;

  function telusuri(node) {
    if (!node) return;
    hitunganNode++;
    console.log("Mengunjungi node:", node.nama);
    if (node.anak && Array.isArray(node.anak)) {
      node.anak.forEach(telusuri);
    }
  }

  return {
    jalankan: function(akar) {
      hitunganNode = 0;
      telusuri(akar);
      return hitunganNode;
    }
  };
}

const dataPohon = {
  nama: "Root",
  anak: [
    { nama: "Folder A", anak: [{ nama: "File A1" }] },
    { nama: "Folder B", anak: [] }
  ]
};

const penelusur = buatPenelusurPohon();
const totalNode = penelusur.jalankan(dataPohon);
console.log("Total elemen pohon yang diproses:", totalNode);
