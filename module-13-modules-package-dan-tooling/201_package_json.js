// Struktur dan Peran package.json dalam Proyek Node.js

const contohPackageJson = {
  name: "aplikasi-belajar-javascript",
  version: "1.0.0",
  description: "Modul pembelajaran komprehensif JavaScript",
  main: "index.js",
  scripts: {
    start: "node index.js",
    test: "node test.js"
  },
  dependencies: {
    express: "^4.19.0"
  },
  devDependencies: {
    eslint: "^9.0.0"
  }
};

console.log("=== Anatomi File package.json ===");
console.log("Nama Proyek    :", contohPackageJson.name);
console.log("Versi          :", contohPackageJson.version);
console.log("NPM Script 'start' :", contohPackageJson.scripts.start);
console.log("Dependensi Utama   :", Object.keys(contohPackageJson.dependencies).join(", "));
