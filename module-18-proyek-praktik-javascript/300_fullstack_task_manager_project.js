// Proyek 12: Aplikasi Manajemen Tugas Full-Stack (State Controller & Model)

class TaskManagerFullstack {
  constructor() {
    this.tugas = [
      { id: 1, judul: "Desain UI / Wireframe", status: "Done" },
      { id: 2, judul: "Pengembangan Backend REST API", status: "In Progress" },
      { id: 3, judul: "Pengujian Unit & Integrasi", status: "Todo" }
    ];
  }

  tambah(judul) {
    this.tugas.push({ id: this.tugas.length + 1, judul, status: "Todo" });
  }

  updateStatus(id, statusBaru) {
    const t = this.tugas.find(item => item.id === id);
    if (t) t.status = statusBaru;
  }

  ringkasan() {
    console.log("=== DASHBOARD FULLSTACK TASK MANAGER ===");
    this.tugas.forEach(t => console.log("#" + t.id + " [" + t.status.padEnd(11) + "] " + t.judul));
  }
}

const manajerProyek = new TaskManagerFullstack();
manajerProyek.updateStatus(2, "Done");
manajerProyek.ringkasan();
