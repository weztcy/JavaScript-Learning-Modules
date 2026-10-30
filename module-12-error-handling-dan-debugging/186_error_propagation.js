// Propagasi Error: Error berpindah ke atas tumpukan panggilan (call stack)
// hingga menemukan blok catch yang sesuai

function levelTiga() {
  throw new Error("Kegagalan pada komponen Level 3");
}

function levelDua() {
  levelTiga(); // Error melompat melalui levelDua
}

function levelSatu() {
  levelDua(); // Error melompat melalui levelSatu
}

try {
  console.log("Memulai rantai pemanggilan fungsi...");
  levelSatu();
} catch (err) {
  console.log("[PROPAGASI TERTANGKAP DI ROOT]:", err.message);
}
