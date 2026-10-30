// Asynchronous Iteration (for await...of): Mengiterasi sumber data yang menghasilkan Promise

async function* generatorDataAsinkron() {
  const antrianData = ["Paket 1", "Paket 2", "Paket 3"];
  for (const item of antrianData) {
    yield new Promise(resolve => setTimeout(() => resolve(item), 10));
  }
}

(async () => {
  console.log("Memulai iterasi asinkron (for await...of):");
  for await (const data of generatorDataAsinkron()) {
    console.log("Menerima paket asinkron:", data);
  }
  console.log("Seluruh paket selesai diproses.");
})();
