// Object.freeze() membekukan objek sehingga tidak dapat ditambah, dihapus, atau diubah nilainya

const konfigurasiKunci = {
  versiApp: "2.1.0",
  mode: "production"
};

Object.freeze(konfigurasiKunci);

// Mencoba mengubah nilai pada objek yang dibekukan
konfigurasiKunci.versiApp = "3.0.0"; // Perubahan diabaikan (atau melempar TypeError di strict mode)

console.log("Objek setelah dibekukan:", konfigurasiKunci);
console.log("Apakah objek beku?", Object.isFrozen(konfigurasiKunci));
