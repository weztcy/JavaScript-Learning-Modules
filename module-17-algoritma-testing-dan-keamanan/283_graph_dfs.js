// Algoritma Graph Depth-First Search (DFS): Penelusuran Graf Mendalam

function dfs(graf, simpulAwal) {
  const dikunjungi = new Set();
  const urutan = [];

  function telusuri(simpul) {
    dikunjungi.add(simpul);
    urutan.push(simpul);

    for (const tetangga of graf[simpul] || []) {
      if (!dikunjungi.has(tetangga)) {
        telusuri(tetangga);
      }
    }
  }

  telusuri(simpulAwal);
  return urutan;
}

const petaGraf = {
  1: [2, 3],
  2: [4],
  3: [5],
  4: [], 5: []
};

console.log("Hasil Penelusuran Graf DFS:", dfs(petaGraf, 1).join(" -> "));
