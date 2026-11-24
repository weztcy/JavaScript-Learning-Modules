// Proyek 4: Aplikasi To-Do List (Manajemen Tugas) dengan Status Selesai

class TodoListApp {
  constructor() { this.todos = []; }
  tambah(judul) {
    const todo = { id: this.todos.length + 1, judul, selesai: false };
    this.todos.push(todo);
    console.log("Tugas ditambahkan:", judul);
  }
  tandaiSelesai(id) {
    const item = this.todos.find(t => t.id === id);
    if (item) item.selesai = true;
  }
  cetakDaftar() {
    console.log("Daftar Tugas Saat Ini:");
    this.todos.forEach(t => {
      console.log("[" + (t.selesai ? "v" : " ") + "] #" + t.id + " " + t.judul);
    });
  }
}

console.log("=== PROYEK: TO-DO LIST ===");
const todo = new TodoListApp();
todo.tambah("Mempelajari JavaScript Modern");
todo.tambah("Mengerjakan Tugas Modul");
todo.tandaiSelesai(1);
todo.cetakDaftar();
