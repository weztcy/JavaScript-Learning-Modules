// Algoritma Graph Breadth-First Search (BFS): Penelusuran Graf Melebar

function bfs(graf, simpulAwal) {
  const dikunjungi = new Set();
  const antrian = [simpulAwal];
  const urutan = [];

  dikunjungi.add(simpulAwal);

  while (antrian.length > 0) {
    const simpul = antrian.shift();
    urutan.push(simpul);

    for (const tetangga of graf[simpul] || []) {
      if (!dikunjungi.has(tetangga)) {
        dikunjungi.add(tetangga);
        antrian.push(tetangga);
      }
    }
  }
  return urutan;
}

const graf = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [], E: [], F: []
};

console.log("Hasil Penelusuran Graf BFS:", bfs(graf, "A").join(" -> "));
