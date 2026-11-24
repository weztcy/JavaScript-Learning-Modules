// Call Stack: Struktur data LIFO (Last-In-First-Out) untuk mencatat pemanggilan fungsi

function pertama() {
  console.log("-> Masuk fungsi pertama()");
  kedua();
  console.log("<- Keluar fungsi pertama()");
}

function kedua() {
  console.log("  -> Masuk fungsi kedua()");
  ketiga();
  console.log("  <- Keluar fungsi kedua()");
}

function ketiga() {
  console.log("    -> Masuk fungsi ketiga()");
  console.log("    <- Keluar fungsi ketiga()");
}

console.log("=== Menelusuri Call Stack ===");
pertama();
