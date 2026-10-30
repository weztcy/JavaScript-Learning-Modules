// Keyboard Events: Menangkap interaksi penekanan tombol keyboard (keydown, keyup)

function tanganiKeyboard(event) {
  console.log("Key ditekan  :", event.key);
  console.log("Kode tombol  :", event.code);
  console.log("Ctrl aktif?  :", event.ctrlKey);

  if (event.ctrlKey && event.key === "s") {
    console.log("-> Pintasan 'Ctrl + S' terdeteksi: Menyimpan dokumen!");
  }
}

tanganiKeyboard({ key: "s", code: "KeyS", ctrlKey: true });
