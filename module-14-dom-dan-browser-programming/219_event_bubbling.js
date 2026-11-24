// Event Bubbling: Perambatan event dari elemen terdalam (child) menuju induk terluar (parent)

console.log("=== Alur Event Bubbling ===");

function picuEventBubbling() {
  const alur = ["Button (Tombol)", "Div (Kartu)", "Section (Kontainer)", "Body", "Document"];
  
  alur.forEach((node, index) => {
    console.log("Langkah " + (index + 1) + ": Event merambat naik ke -> " + node);
  });
}

picuEventBubbling();
console.log("stopPropagation() dapat dipanggil untuk menghentikan perambatan ke atas.");
