// Scope (cakupan) variabel dalam JavaScript: Global Scope, Function Scope, dan Block Scope

// 1. Global Scope: dapat diakses dari mana saja di dalam file
const variabelGlobal = "Saya berada di Global Scope";

function ujiScope() {
  // 2. Function Scope: hanya dapat diakses di dalam fungsi ini
  const variabelFungsi = "Saya berada di Function Scope";
  console.log(variabelGlobal);
  console.log(variabelFungsi);

  if (true) {
    // 3. Block Scope: hanya hidup di dalam blok kurung kurawal {}
    let variabelBlok = "Saya berada di Block Scope";
    console.log(variabelBlok);
  }
}

ujiScope();
console.log("Akses luar fungsi:", variabelGlobal);
