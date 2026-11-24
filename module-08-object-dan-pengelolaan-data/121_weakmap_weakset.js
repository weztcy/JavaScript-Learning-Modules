// WeakMap dan WeakSet menyimpan referensi objek secara lemah (weak reference)
// Memungkinkan Garbage Collector membersihkan objek jika tidak ada referensi lain

const dataWeakMap = new WeakMap();
let userLogin = { username: "yohan" };

// Kunci pada WeakMap WAJIB berupa Objek
dataWeakMap.set(userLogin, { loginTerakhir: new Date().toLocaleTimeString() });

console.log("Data sesi login:", dataWeakMap.get(userLogin));

// Ketika userLogin diatur ke null, memori objek dapat dibersihkan otomatis oleh runtime
userLogin = null;
console.log("Referensi objek user telah dihapus untuk garbage collection.");
