// Memeriksa Properti pada Event Object (e.target, e.type, preventDefault)

function prosesKlikEvent(event) {
  console.log("=== Event Object Metadata ===");
  console.log("Tipe Event     :", event.type);
  console.log("Target Elemen  :", event.target.tagName, "(ID: " + event.target.id + ")");
  console.log("Posisi Kursor  : X=" + event.clientX + ", Y=" + event.clientY);
  
  // Mencegah perilaku default browser (seperti reload saat submit form)
  event.preventDefault();
  console.log("Perilaku default berhasil dicegah (preventDefault).");
}

const eventMock = {
  type: "submit",
  target: { tagName: "FORM", id: "form-registrasi" },
  clientX: 120,
  clientY: 240,
  preventDefault: () => {}
};

prosesKlikEvent(eventMock);
