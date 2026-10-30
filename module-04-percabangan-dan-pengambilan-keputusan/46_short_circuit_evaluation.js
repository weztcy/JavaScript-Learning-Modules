// Short-Circuit Evaluation: Penghentian evaluasi logika jika hasil sudah pasti

// Pada AND (&&), jika operand pertama false, operand kedua tidak akan pernah dijalankan
function fungsiKedua() {
  console.log("Fungsi kedua dipanggil.");
  return true;
}

console.log("1. Short-circuit AND dengan false:");
const hasilA = false && fungsiKedua(); // fungsiKedua tidak dipanggil

console.log("2. Short-circuit OR dengan true:");
// Pada OR (||), jika operand pertama true, operand kedua tidak akan pernah dijalankan
const hasilB = true || fungsiKedua();  // fungsiKedua tidak dipanggil

console.log("Evaluasi selesai tanpa pemanggilan fungsi kedua yang tidak perlu.");
