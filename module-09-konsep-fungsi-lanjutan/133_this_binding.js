// Kehilangan Konteks 'this' dan Cara Mengatasinya

const pengguna = {
  nama: "Rian Hidayat",
  perkenalkan: function() {
    console.log("Halo, saya " + this.nama);
  }
};

// Pemanggilan normal mengikat 'this' ke objek pengguna
pengguna.perkenalkan();

// Ketika disimpan ke variabel terpisah, binding 'this' terlepas
const fungsiTerlepas = pengguna.perkenalkan;
// fungsiTerlepas() akan mencetak "Halo, saya undefined" jika dipanggil langsung

// Mengikat 'this' secara permanen dengan bind()
const fungsiTerikat = pengguna.perkenalkan.bind(pengguna);
fungsiTerikat();
