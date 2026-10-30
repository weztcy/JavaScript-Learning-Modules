// Intersection Observer API: Memantau visibilitas elemen terhadap viewport (Lazy Loading)

class IntersectionObserverSimulasi {
  constructor(callback) {
    this.callback = callback;
  }
  simulasiScrolledIntoView(elemenTarget) {
    console.log("Elemen masuk ke dalam viewport layar pengguna!");
    this.callback([{ target: elemenTarget, isIntersecting: true }]);
  }
}

const observer = new IntersectionObserverSimulasi((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("-> Mengunduh gambar resolusi tinggi untuk:", entry.target);
    }
  });
});

observer.simulasiScrolledIntoView("img#hero-banner");
