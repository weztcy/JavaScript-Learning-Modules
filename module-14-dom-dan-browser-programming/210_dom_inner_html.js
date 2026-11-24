// Manipulasi DOM dengan innerHTML: Menuliskan Markup HTML Bersarang

class ElementHTMLSimulasi {
  constructor() {
    this.innerHTML = "";
  }
  setMarkup(htmlString) {
    this.innerHTML = htmlString;
    console.log("Browser mem-parse markup HTML berikut ke dalam DOM Tree:");
    console.log(this.innerHTML);
  }
}

console.log("=== Penggunaan innerHTML ===");
const container = new ElementHTMLSimulasi();
container.setMarkup(`
  <div class="alert-box">
    <h3>Pemberitahuan Sistem</h3>
    <p>Akun Anda telah berhasil diverifikasi.</p>
  </div>
`.trim());
