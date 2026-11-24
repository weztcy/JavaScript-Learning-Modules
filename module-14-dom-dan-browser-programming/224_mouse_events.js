// Mouse Events: Menangani interaksi kursor tetikus (click, mouseenter, mouseleave)

const simulasiKursor = {
  onMouseEnter: (namaElemen) => console.log("[MouseEnter]: Kursor berada di atas", namaElemen),
  onMouseLeave: (namaElemen) => console.log("[MouseLeave]: Kursor meninggalkan area", namaElemen),
  onDoubleClick: (namaElemen) => console.log("[DblClick]  : Klik ganda terdeteksi pada", namaElemen)
};

simulasiKursor.onMouseEnter("Banner Iklan");
simulasiKursor.onDoubleClick("Tombol Zoom");
simulasiKursor.onMouseLeave("Banner Iklan");
