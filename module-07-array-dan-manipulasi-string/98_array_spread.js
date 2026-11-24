// Spread Syntax (...) pada Array untuk menggabungkan atau menyalin array

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "PostgreSQL"];

// Menggabungkan array dengan rapi
const fullstack = [...frontend, ...backend, "Git"];
console.log("Daftar Skill Fullstack:", fullstack);

// Menyalin array tanpa referensi (shallow copy)
const salinan = [...frontend];
salinan.push("React");
console.log("Array Asli   :", frontend);
console.log("Array Salinan:", salinan);
