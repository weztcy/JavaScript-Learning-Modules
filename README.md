# JavaScript Learning Modules

![Project Banner](screenshots/banner.webp)

![Project Type](https://img.shields.io/badge/Project_Type-Programming_Education-blue)
![Primary Language](https://img.shields.io/badge/Primary_Language-JavaScript-blue)
![Learning Level](https://img.shields.io/badge/Learning_Level-Beginner_to_Advanced-green)
![Main Topic](https://img.shields.io/badge/Main_Topic-JavaScript_Curriculum-purple)
![Learning Approach](https://img.shields.io/badge/Learning_Approach-Module--Based-informational)
![Learning Format](https://img.shields.io/badge/Learning_Format-Code_%2B_Practice_Projects-orange)
![Runtime / Environment](https://img.shields.io/badge/Runtime_%2F_Environment-Node.js_%26_Browser-blueviolet)
![Framework / Library](https://img.shields.io/badge/Framework_%2F_Library-Standard_Library_%26_Express-informational)
![Project Year](https://img.shields.io/badge/Project_Year-2025-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Project Overview

**JavaScript Learning Modules** is a structured programming education repository organized into 18 progressive modules and 300 standalone JavaScript lessons (`01_hello_world.js` through `300_fullstack_task_manager_project.js`). Each module pairs a dedicated Markdown guide (`README.md`) with runnable CommonJS scripts and corresponding terminal output captures (`output/*.png`). The curriculum moves systematically from foundational syntax, variables, operators, control flow, and functions to advanced functional programming, object-oriented design, built-in APIs, error handling, browser DOM programming, asynchronous concurrency, Node.js/Express backends, classical algorithms, security fundamentals, and 12 practical capstone projects.

## Learning Objectives

The curriculum is designed to build practical JavaScript fluency from core language mechanics to applied backend, browser, and algorithmic engineering. Key intended learning outcomes supported by the repository include:

- Writing clean, structured JavaScript programs using `strict mode`, proper scoping (`var`, `let`, `const`), primitive types, and modern operators such as nullish coalescing (`??`) and optional chaining (`?.`).
- Designing modular and reusable logic with functions, closures, recursion, higher-order array methods (`map`, `filter`, `reduce`), currying, composition, memoization, iterators, and generators.
- Modeling domain entities using prototypes, ES6 classes, inheritance, encapsulation (`#` private fields), polymorphism, mixins, and collection structures (`Map`, `Set`, `WeakMap`, `WeakSet`).
- Implementing defensive programming with `try...catch...finally`, custom `Error` subclasses, `node:assert` checks, input validation, and Cross-Site Scripting (XSS) prevention.
- Understanding browser DOM manipulation, event delegation, Web Storage, and asynchronous execution models (`Event Loop`, `Promise`, `async/await`, `Fetch API`, `AbortController`, and WebSocket patterns).
- Building server-side utilities and RESTful APIs using Node.js built-in modules (`node:fs`, `node:path`, `node:http`, `node:https`, `node:crypto`, `node:events`, `node:stream`) and Express.
- Implementing classical searching, sorting, and data structure algorithms alongside custom unit/integration test runners and 12 end-to-end practice projects.

## Learning Level & Approach

The repository follows a sequential, self-paced, module-based progression spanning beginner fundamentals through intermediate language mechanics and advanced full-stack and algorithmic topics. Each lesson script is self-contained with inline Indonesian explanatory comments and a pre-captured execution screenshot in its module's `output/` directory.

| Attribute | Description |
| :--- | :--- |
| **Learning Level** | Beginner to Advanced (progressive 18-module track) |
| **Learning Approach** | Module-Based, Code-First, and Project-Based Capstone |
| **Learning Format** | Standalone `.js` source scripts, per-module `README.md` guides, and `.png` execution captures |
| **Programming Focus** | Core JavaScript (ES6+), Browser DOM & Async Web APIs, Node.js, Express, Algorithms & Security |
| **Curriculum Scope** | 18 modules, 300 numbered submodules, 300 source files, and 300 output captures |

## Learning Path & Curriculum

Learners should follow the modules sequentially from Module 01 to Module 18, as later modules build directly on earlier language primitives, functional patterns, and runtime concepts:

1. **Foundations (Modules 01–05):** Program structure, variables, primitive types, I/O, operators, conditionals, and loop patterns.
2. **Data Structures & Functional Core (Modules 06–09):** Functions, closures, arrays, strings, objects, `Map`/`Set`, currying, `this` binding, iterators, and generators.
3. **OOP, Language APIs & Tooling (Modules 10–13):** Prototypes, ES6 classes, built-in objects, `Proxy`/`Reflect`, error handling, `node:assert`, modules, `package.json`, and tooling concepts.
4. **Browser, Async & Backend Systems (Modules 14–16):** DOM APIs, events, storage, Event Loop, Promises, `async/await`, Fetch, Node.js core modules, and Express REST APIs.
5. **Engineering & Capstone Application (Modules 17–18):** Searching, sorting, trees, graphs, dynamic programming, testing, XSS security, and 12 practical projects.

| Order | Module | Main Topics | Materials |
| :---: | :--- | :--- | :--- |
| 01 | [Module 01 — Intro & Program Structure](module-01-pengenalan-javascript-dan-struktur-program/README.md) | Syntax, comments, console APIs, semicolons, strict mode, runtimes | 10 scripts + 10 outputs |
| 02 | [Module 02 — Variables & Data Types](module-02-variabel-dan-tipe-data/README.md) | `var`/`let`/`const`, scope, Number, BigInt, String, Boolean, Symbol, `typeof` | 14 scripts + 14 outputs |
| 03 | [Module 03 — Input, Output & Operators](module-03-input-output-dan-operator/README.md) | CLI/prompt input, coercion, arithmetic, logic, ternary, `??`, `?.`, precedence | 14 scripts + 14 outputs |
| 04 | [Module 04 — Conditionals & Decision Making](module-04-percabangan-dan-pengambilan-keputusan/README.md) | `if`/`else`/`switch`, truthy/falsy, short-circuiting, validation mini-tasks | 12 scripts + 12 outputs |
| 05 | [Module 05 — Loops & Iteration](module-05-perulangan/README.md) | `for`, `while`, `do-while`, `for...of`, `for...in`, `break`/`continue`, patterns | 14 scripts + 14 outputs |
| 06 | [Module 06 — Functions](module-06-fungsi/README.md) | Declarations, expressions, arrows, rest/default params, closures, HOF, IIFE | 18 scripts + 18 outputs |
| 07 | [Module 07 — Arrays & String Manipulation](module-07-array-dan-manipulasi-string/README.md) | `map`/`filter`/`reduce`/`flat`, destructuring, spread, string slicing & templates | 22 scripts + 22 outputs |
| 08 | [Module 08 — Objects & Data Management](module-08-object-dan-pengelolaan-data/README.md) | Properties, methods, `freeze`/`seal`, shallow vs deep copy, `Map`, `Set`, `WeakMap` | 18 scripts + 18 outputs |
| 09 | [Module 09 — Advanced Function Concepts](module-09-konsep-fungsi-lanjutan/README.md) | Currying, composition, memoization, `call`/`apply`/`bind`, generators, iterators | 18 scripts + 18 outputs |
| 10 | [Module 10 — Object-Oriented Programming](module-10-object-oriented-programming-oop/README.md) | Prototypes, ES6 classes, `#` private fields, inheritance, polymorphism, mixins | 20 scripts + 20 outputs |
| 11 | [Module 11 — Built-in Objects & Language Features](module-11-built-in-objects-dan-fitur-bahasa/README.md) | `Math`, `Date`, `RegExp`, `JSON`, `Proxy`, `Reflect`, descriptors, `structuredClone` | 20 scripts + 20 outputs |
| 12 | [Module 12 — Error Handling & Debugging](module-12-error-handling-dan-debugging/README.md) | `try...catch...finally`, custom errors, stack traces, `debugger`, `node:assert` | 12 scripts + 12 outputs |
| 13 | [Module 13 — Modules, Packages & Tooling](module-13-modules-package-dan-tooling/README.md) | ES Modules vs CommonJS, `package.json`, npm scripts, env vars, ESLint/Prettier | 14 scripts + 14 outputs |
| 14 | [Module 14 — DOM & Browser Programming](module-14-dom-dan-browser-programming/README.md) | DOM selection, traversal, events, bubbling/delegation, forms, Storage, Observers | 24 scripts + 24 outputs |
| 15 | [Module 15 — Asynchronous JavaScript & Web APIs](module-15-asynchronous-javascript-dan-web-api/README.md) | Timers, Event Loop, microtasks, Promises, `async/await`, Fetch, Workers, WebSocket | 20 scripts + 20 outputs |
| 16 | [Module 16 — Node.js & Backend Programming](module-16-node-js-dan-backend-programming/README.md) | `node:fs`, `node:path`, `node:os`, `node:events`, streams, `node:http`, crypto, Express | 20 scripts + 20 outputs |
| 17 | [Module 17 — Algorithms, Testing & Security](module-17-algoritma-testing-dan-keamanan/README.md) | Search/sort algorithms, stacks, queues, trees, BFS/DFS, DP, testing, XSS security | 18 scripts + 18 outputs |
| 18 | [Module 18 — Practical JavaScript Projects](module-18-proyek-praktik-javascript/README.md) | 12 applied projects from calculator & games to Express API & task manager | 12 scripts + 12 outputs |

## Learning Modules & Contents

Each module directory contains its own detailed `README.md` indexing every numbered script and `output/*.png` execution screenshot. Representative entrypoints and module guides are linked below.

### Module 01 — Pengenalan JavaScript dan Struktur Program

- **Module Guide:** [Open Module 01 README](module-01-pengenalan-javascript-dan-struktur-program/README.md) (`10` submodules: `01_hello_world.js` to `10_script_execution.js`)
- **Submodule 01 — First JavaScript Program:**
  - Source Code: [01_hello_world.js](module-01-pengenalan-javascript-dan-struktur-program/01_hello_world.js)
  - Execution Output: [01_hello_world.png](module-01-pengenalan-javascript-dan-struktur-program/output/01_hello_world.png)
- **Submodule 08 — Strict Mode:**
  - Source Code: [08_strict_mode.js](module-01-pengenalan-javascript-dan-struktur-program/08_strict_mode.js)
  - Execution Output: [08_strict_mode.png](module-01-pengenalan-javascript-dan-struktur-program/output/08_strict_mode.png)

### Module 02 — Variabel dan Tipe Data

- **Module Guide:** [Open Module 02 README](module-02-variabel-dan-tipe-data/README.md) (`14` submodules: `11_var_keyword.js` to `24_dynamic_typing.js`)
- **Submodule 12 — Block-Scoped Variables (`let`):**
  - Source Code: [12_let_keyword.js](module-02-variabel-dan-tipe-data/12_let_keyword.js)
  - Execution Output: [12_let_keyword.png](module-02-variabel-dan-tipe-data/output/12_let_keyword.png)
- **Submodule 22 — Symbol Data Type:**
  - Source Code: [22_symbol_type.js](module-02-variabel-dan-tipe-data/22_symbol_type.js)
  - Execution Output: [22_symbol_type.png](module-02-variabel-dan-tipe-data/output/22_symbol_type.png)

### Module 03 — Input, Output, dan Operator

- **Module Guide:** [Open Module 03 README](module-03-input-output-dan-operator/README.md) (`14` submodules: `25_console_input.js` to `38_operator_precedence.js`)
- **Submodule 25 — Console Input with Node.js `readline`:**
  - Source Code: [25_console_input.js](module-03-input-output-dan-operator/25_console_input.js)
  - Execution Output: [25_console_input.png](module-03-input-output-dan-operator/output/25_console_input.png)
- **Submodule 36 — Nullish Coalescing (`??`) & Optional Chaining (`?.`):**
  - Source Code: [36_nullish_coalescing.js](module-03-input-output-dan-operator/36_nullish_coalescing.js) / [37_optional_chaining.js](module-03-input-output-dan-operator/37_optional_chaining.js)
  - Execution Output: [36_nullish_coalescing.png](module-03-input-output-dan-operator/output/36_nullish_coalescing.png)

### Module 04 — Percabangan dan Pengambilan Keputusan

- **Module Guide:** [Open Module 04 README](module-04-percabangan-dan-pengambilan-keputusan/README.md) (`12` submodules: `39_if_statement.js` to `50_discount_calculator.js`)
- **Submodule 43 — Switch Statement:**
  - Source Code: [43_switch_statement.js](module-04-percabangan-dan-pengambilan-keputusan/43_switch_statement.js)
  - Execution Output: [43_switch_statement.png](module-04-percabangan-dan-pengambilan-keputusan/output/43_switch_statement.png)
- **Submodule 50 — Discount Calculator Logic:**
  - Source Code: [50_discount_calculator.js](module-04-percabangan-dan-pengambilan-keputusan/50_discount_calculator.js)
  - Execution Output: [50_discount_calculator.png](module-04-percabangan-dan-pengambilan-keputusan/output/50_discount_calculator.png)

### Module 05 — Perulangan

- **Module Guide:** [Open Module 05 README](module-05-perulangan/README.md) (`14` submodules: `51_for_loop.js` to `64_guessing_game.js`)
- **Submodule 57 — `for...of` Iteration:**
  - Source Code: [57_for_of_loop.js](module-05-perulangan/57_for_of_loop.js)
  - Execution Output: [57_for_of_loop.png](module-05-perulangan/output/57_for_of_loop.png)
- **Submodule 64 — Loop-Based Guessing Game:**
  - Source Code: [64_guessing_game.js](module-05-perulangan/64_guessing_game.js)
  - Execution Output: [64_guessing_game.png](module-05-perulangan/output/64_guessing_game.png)

### Module 06 — Fungsi

- **Module Guide:** [Open Module 06 README](module-06-fungsi/README.md) (`18` submodules: `65_function_declaration.js` to `82_iife.js`)
- **Submodule 75 — Closures:**
  - Source Code: [75_closure.js](module-06-fungsi/75_closure.js)
  - Execution Output: [75_closure.png](module-06-fungsi/output/75_closure.png)
- **Submodule 78 — Higher-Order Functions:**
  - Source Code: [78_higher_order_function.js](module-06-fungsi/78_higher_order_function.js)
  - Execution Output: [78_higher_order_function.png](module-06-fungsi/output/78_higher_order_function.png)

### Module 07 — Array dan Manipulasi String

- **Module Guide:** [Open Module 07 README](module-07-array-dan-manipulasi-string/README.md) (`22` submodules: `83_array_basic.js` to `104_string_validation.js`)
- **Submodule 90–92 — Functional Array Pipelines (`map`, `filter`, `reduce`):**
  - Source Code: [90_array_map.js](module-07-array-dan-manipulasi-string/90_array_map.js) / [92_array_reduce.js](module-07-array-dan-manipulasi-string/92_array_reduce.js)
  - Execution Output: [90_array_map.png](module-07-array-dan-manipulasi-string/output/90_array_map.png)
- **Submodule 103 — Template Literals:**
  - Source Code: [103_template_literals.js](module-07-array-dan-manipulasi-string/103_template_literals.js)
  - Execution Output: [103_template_literals.png](module-07-array-dan-manipulasi-string/output/103_template_literals.png)

### Module 08 — Object dan Pengelolaan Data

- **Module Guide:** [Open Module 08 README](module-08-object-dan-pengelolaan-data/README.md) (`18` submodules: `105_object_basic.js` to `122_object_dynamic_properties.js`)
- **Submodule 118 — Deep Copy Patterns:**
  - Source Code: [118_deep_copy.js](module-08-object-dan-pengelolaan-data/118_deep_copy.js)
  - Execution Output: [118_deep_copy.png](module-08-object-dan-pengelolaan-data/output/118_deep_copy.png)
- **Submodule 119–120 — `Map` & `Set` Collections:**
  - Source Code: [119_map_collection.js](module-08-object-dan-pengelolaan-data/119_map_collection.js) / [120_set_collection.js](module-08-object-dan-pengelolaan-data/120_set_collection.js)
  - Execution Output: [119_map_collection.png](module-08-object-dan-pengelolaan-data/output/119_map_collection.png)

### Module 09 — Konsep Fungsi Lanjutan

- **Module Guide:** [Open Module 09 README](module-09-konsep-fungsi-lanjutan/README.md) (`18` submodules: `123_function_currying.js` to `140_custom_generator.js`)
- **Submodule 123–124 — Currying & Composition:**
  - Source Code: [123_function_currying.js](module-09-konsep-fungsi-lanjutan/123_function_currying.js) / [124_function_composition.js](module-09-konsep-fungsi-lanjutan/124_function_composition.js)
  - Execution Output: [123_function_currying.png](module-09-konsep-fungsi-lanjutan/output/123_function_currying.png)
- **Submodule 136–140 — Generators & Custom Iterators:**
  - Source Code: [136_generator_function.js](module-09-konsep-fungsi-lanjutan/136_generator_function.js) / [140_custom_generator.js](module-09-konsep-fungsi-lanjutan/140_custom_generator.js)
  - Execution Output: [140_custom_generator.png](module-09-konsep-fungsi-lanjutan/output/140_custom_generator.png)

### Module 10 — Object-Oriented Programming (OOP)

- **Module Guide:** [Open Module 10 README](module-10-object-oriented-programming-oop/README.md) (`20` submodules: `141_constructor_function.js` to `160_symbol_properties.js`)
- **Submodule 144 — Prototype Chain:**
  - Source Code: [144_prototype_chain.js](module-10-object-oriented-programming-oop/144_prototype_chain.js)
  - Execution Output: [144_prototype_chain.png](module-10-object-oriented-programming-oop/output/144_prototype_chain.png)
- **Submodule 150–158 — Private Fields, Inheritance & Mixins:**
  - Source Code: [150_private_fields.js](module-10-object-oriented-programming-oop/150_private_fields.js) / [158_mixins.js](module-10-object-oriented-programming-oop/158_mixins.js)
  - Execution Output: [150_private_fields.png](module-10-object-oriented-programming-oop/output/150_private_fields.png)

### Module 11 — Built-in Objects dan Fitur Bahasa

- **Module Guide:** [Open Module 11 README](module-11-built-in-objects-dan-fitur-bahasa/README.md) (`20` submodules: `161_math_object.js` to `180_structured_clone.js`)
- **Submodule 165 — Regular Expressions:**
  - Source Code: [165_regex_basic.js](module-11-built-in-objects-dan-fitur-bahasa/165_regex_basic.js)
  - Execution Output: [165_regex_basic.png](module-11-built-in-objects-dan-fitur-bahasa/output/165_regex_basic.png)
- **Submodule 174–180 — `Proxy`, `Reflect`, and `structuredClone()`:**
  - Source Code: [174_proxy_object.js](module-11-built-in-objects-dan-fitur-bahasa/174_proxy_object.js) / [180_structured_clone.js](module-11-built-in-objects-dan-fitur-bahasa/180_structured_clone.js)
  - Execution Output: [174_proxy_object.png](module-11-built-in-objects-dan-fitur-bahasa/output/174_proxy_object.png)

### Module 12 — Error Handling dan Debugging

- **Module Guide:** [Open Module 12 README](module-12-error-handling-dan-debugging/README.md) (`12` submodules: `181_try_catch.js` to `192_error_handling_patterns.js`)
- **Submodule 184 — Custom Error Classes:**
  - Source Code: [184_custom_error.js](module-12-error-handling-dan-debugging/184_custom_error.js)
  - Execution Output: [184_custom_error.png](module-12-error-handling-dan-debugging/output/184_custom_error.png)
- **Submodule 191 — Assertions via `node:assert`:**
  - Source Code: [191_assert_module.js](module-12-error-handling-dan-debugging/191_assert_module.js)
  - Execution Output: [191_assert_module.png](module-12-error-handling-dan-debugging/output/191_assert_module.png)

### Module 13 — Modules, Package, dan Tooling

- **Module Guide:** [Open Module 13 README](module-13-modules-package-dan-tooling/README.md) (`14` submodules: `193_es_modules_export.js` to `206_prettier_formatting.js`)
- **Submodule 193 & 199 — ES Modules vs CommonJS `require()`:**
  - Source Code: [193_es_modules_export.js](module-13-modules-package-dan-tooling/193_es_modules_export.js) / [199_commonjs_require.js](module-13-modules-package-dan-tooling/199_commonjs_require.js)
  - Execution Output: [199_commonjs_require.png](module-13-modules-package-dan-tooling/output/199_commonjs_require.png)
- **Submodule 205–206 — Linting & Formatting Principles (ESLint & Prettier):**
  - Source Code: [205_eslint_basic.js](module-13-modules-package-dan-tooling/205_eslint_basic.js) / [206_prettier_formatting.js](module-13-modules-package-dan-tooling/206_prettier_formatting.js)
  - Execution Output: [205_eslint_basic.png](module-13-modules-package-dan-tooling/output/205_eslint_basic.png)

### Module 14 — DOM dan Browser Programming

- **Module Guide:** [Open Module 14 README](module-14-dom-dan-browser-programming/README.md) (`24` submodules: `207_dom_selection.js` to `230_mutation_observer.js`)
- **Submodule 207 & 220 — DOM Selection & Event Delegation (Browser/Mock Dual Runtime):**
  - Source Code: [207_dom_selection.js](module-14-dom-dan-browser-programming/207_dom_selection.js) / [220_event_delegation.js](module-14-dom-dan-browser-programming/220_event_delegation.js)
  - Execution Output: [207_dom_selection.png](module-14-dom-dan-browser-programming/output/207_dom_selection.png)
- **Submodule 225 & 229 — `localStorage` & `IntersectionObserver`:**
  - Source Code: [225_local_storage.js](module-14-dom-dan-browser-programming/225_local_storage.js) / [229_intersection_observer.js](module-14-dom-dan-browser-programming/229_intersection_observer.js)
  - Execution Output: [225_local_storage.png](module-14-dom-dan-browser-programming/output/225_local_storage.png)

### Module 15 — Asynchronous JavaScript dan Web API

- **Module Guide:** [Open Module 15 README](module-15-asynchronous-javascript-dan-web-api/README.md) (`20` submodules: `231_set_timeout.js` to `250_async_iteration.js`)
- **Submodule 233–238 — Event Loop, Microtasks & `Promise.all()`:**
  - Source Code: [233_event_loop.js](module-15-asynchronous-javascript-dan-web-api/233_event_loop.js) / [238_promise_all.js](module-15-asynchronous-javascript-dan-web-api/238_promise_all.js)
  - Execution Output: [233_event_loop.png](module-15-asynchronous-javascript-dan-web-api/output/233_event_loop.png)
- **Submodule 244 & 249 — Fetch API & WebSocket Client Simulation:**
  - Source Code: [244_fetch_api.js](module-15-asynchronous-javascript-dan-web-api/244_fetch_api.js) / [249_web_socket_client.js](module-15-asynchronous-javascript-dan-web-api/249_web_socket_client.js)
  - Execution Output: [244_fetch_api.png](module-15-asynchronous-javascript-dan-web-api/output/244_fetch_api.png)

### Module 16 — Node.js dan Backend Programming

- **Module Guide:** [Open Module 16 README](module-16-node-js-dan-backend-programming/README.md) (`20` submodules: `251_nodejs_hello_world.js` to `270_express_rest_api.js`)
- **Submodule 254–265 — Core Node.js Modules (`node:fs`, `node:http`, `node:crypto`):**
  - Source Code: [254_nodejs_file_read.js](module-16-node-js-dan-backend-programming/254_nodejs_file_read.js) / [262_nodejs_http_server.js](module-16-node-js-dan-backend-programming/262_nodejs_http_server.js) / [265_nodejs_crypto.js](module-16-node-js-dan-backend-programming/265_nodejs_crypto.js)
  - Execution Output: [254_nodejs_file_read.png](module-16-node-js-dan-backend-programming/output/254_nodejs_file_read.png)
- **Submodule 267–270 — Express Server, Routing, Middleware & REST API:**
  - Source Code: [267_express_server.js](module-16-node-js-dan-backend-programming/267_express_server.js) / [270_express_rest_api.js](module-16-node-js-dan-backend-programming/270_express_rest_api.js)
  - Execution Output: [270_express_rest_api.png](module-16-node-js-dan-backend-programming/output/270_express_rest_api.png)

### Module 17 — Algoritma, Testing, dan Keamanan

- **Module Guide:** [Open Module 17 README](module-17-algoritma-testing-dan-keamanan/README.md) (`18` submodules: `271_linear_search.js` to `288_secure_input_validation.js`)
- **Submodule 272–284 — Search, Sort, Data Structures, Graph & DP:**
  - Source Code: [272_binary_search.js](module-17-algoritma-testing-dan-keamanan/272_binary_search.js) / [277_quick_sort.js](module-17-algoritma-testing-dan-keamanan/277_quick_sort.js) / [282_graph_bfs.js](module-17-algoritma-testing-dan-keamanan/282_graph_bfs.js) / [284_dynamic_programming.js](module-17-algoritma-testing-dan-keamanan/284_dynamic_programming.js)
  - Execution Output: [277_quick_sort.png](module-17-algoritma-testing-dan-keamanan/output/277_quick_sort.png)
- **Submodule 285–288 — Unit/Integration Testing & Security (XSS Prevention):**
  - Source Code: [285_unit_testing.js](module-17-algoritma-testing-dan-keamanan/285_unit_testing.js) / [287_xss_prevention.js](module-17-algoritma-testing-dan-keamanan/287_xss_prevention.js)
  - Execution Output: [285_unit_testing.png](module-17-algoritma-testing-dan-keamanan/output/285_unit_testing.png)

### Module 18 — Proyek Praktik JavaScript

- **Module Guide:** [Open Module 18 README](module-18-proyek-praktik-javascript/README.md) (`12` submodules: `289_calculator_project.js` to `300_fullstack_task_manager_project.js`)
- **Submodule 289 — OOP Math Calculator:**
  - Source Code: [289_calculator_project.js](module-18-proyek-praktik-javascript/289_calculator_project.js)
  - Execution Output: [289_calculator_project.png](module-18-proyek-praktik-javascript/output/289_calculator_project.png)
- **Submodule 300 — Full-Stack Task Manager State Controller:**
  - Source Code: [300_fullstack_task_manager_project.js](module-18-proyek-praktik-javascript/300_fullstack_task_manager_project.js)
  - Execution Output: [300_fullstack_task_manager_project.png](module-18-proyek-praktik-javascript/output/300_fullstack_task_manager_project.png)

## Projects & Coding Challenges

Module 18 consolidates concepts from earlier modules into 12 self-contained practical projects. Each script provides a completed reference implementation with console output verification.

| # | Project Name | Learning Focus | Source & Output |
| :---: | :--- | :--- | :--- |
| 289 | OOP Calculator | Class methods and division-by-zero error handling | [Source](module-18-proyek-praktik-javascript/289_calculator_project.js) · [Output](module-18-proyek-praktik-javascript/output/289_calculator_project.png) |
| 290 | Number Guessing Game | Class state, guess history tracking, conditional feedback | [Source](module-18-proyek-praktik-javascript/290_number_guessing_project.js) · [Output](module-18-proyek-praktik-javascript/output/290_number_guessing_project.png) |
| 291 | Interactive Quiz App | Question bank evaluation, scoring, summary reporting | [Source](module-18-proyek-praktik-javascript/291_quiz_application.js) · [Output](module-18-proyek-praktik-javascript/output/291_quiz_application.png) |
| 292 | To-Do List Manager | Task creation, completion state toggling, formatted rendering | [Source](module-18-proyek-praktik-javascript/292_todo_list_project.js) · [Output](module-18-proyek-praktik-javascript/output/292_todo_list_project.png) |
| 293 | Expense Tracker | Transaction categorization, `reduce()` aggregation, locale formatting | [Source](module-18-proyek-praktik-javascript/293_expense_tracker_project.js) · [Output](module-18-proyek-praktik-javascript/output/293_expense_tracker_project.png) |
| 294 | Student Grade System | Threshold-based grade mapping and cohort reporting | [Source](module-18-proyek-praktik-javascript/294_student_grade_project.js) · [Output](module-18-proyek-praktik-javascript/output/294_student_grade_project.png) |
| 295 | Inventory Management | `Map`-backed SKU tracking, stock deduction validation | [Source](module-18-proyek-praktik-javascript/295_inventory_management_project.js) · [Output](module-18-proyek-praktik-javascript/output/295_inventory_management_project.png) |
| 296 | Weather Service (Async) | `async`/`Promise` service pattern with mock weather payloads | [Source](module-18-proyek-praktik-javascript/296_weather_api_project.js) · [Output](module-18-proyek-praktik-javascript/output/296_weather_api_project.png) |
| 297 | Movie Search Catalog | Case-insensitive filtering and result projection | [Source](module-18-proyek-praktik-javascript/297_movie_search_project.js) · [Output](module-18-proyek-praktik-javascript/output/297_movie_search_project.png) |
| 298 | Product REST API | Express server setup with JSON middleware and GET endpoint | [Source](module-18-proyek-praktik-javascript/298_rest_api_project.js) · [Output](module-18-proyek-praktik-javascript/output/298_rest_api_project.png) |
| 299 | Real-Time Chat Room | Room-based message broadcasting model and timestamps | [Source](module-18-proyek-praktik-javascript/299_chat_application_project.js) · [Output](module-18-proyek-praktik-javascript/output/299_chat_application_project.png) |
| 300 | Full-Stack Task Manager | Workflow state controller (`Todo`, `In Progress`, `Done`) | [Source](module-18-proyek-praktik-javascript/300_fullstack_task_manager_project.js) · [Output](module-18-proyek-praktik-javascript/output/300_fullstack_task_manager_project.png) |

## Programming Languages & Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| Language Taught | JavaScript (ECMAScript) | Core language across all 18 modules and 300 lesson scripts |
| Runtime Environment | Node.js (CommonJS) | Primary CLI runtime executing all `.js` lesson files |
| Backend Framework | Express (`^5.3.0`) | Routing, middleware, and REST API lessons in Modules 13, 16, and 18 |
| Built-in Node Modules | `node:fs`, `node:path`, `node:http`, `node:https`, `node:crypto`, `node:assert`, `node:events`, `node:stream`, `node:os`, `node:url`, `readline` | File I/O, HTTP servers/clients, hashing, assertions, streams, and CLI input |
| Web & Browser APIs | DOM API, Web Storage, History API, Observers, Fetch API, Web Workers, WebSocket | Client-side browser and async patterns (with runtime-safe mocks in Module 14/15) |
| Package Management | npm (`package.json`) | Dependency management (`express`) for backend and package modules |

## Prerequisites & Setup

To follow the lessons and execute the scripts locally, learners need a Node.js environment and basic familiarity with running commands in a terminal:

- **Required Runtime:** [Node.js](https://nodejs.org/) (v18 or newer recommended for built-in `fetch`, `structuredClone`, and `node:` prefix support; verified on Node.js v24).
- **Package Manager:** `npm` (bundled with Node.js) to install `express` required by Express lessons in Modules 13, 16, and 18.
- **Recommended Editor:** Any code editor such as Visual Studio Code.
- **Recommended Knowledge:** No prior programming experience is required for Module 01; modules progress sequentially from basic syntax to backend and algorithmic concepts.

```bash
git clone https://github.com/weztcy/JavaScript-Learning-Modules.git
cd "JavaScript Learning Modules"
npm install
```

## Code Execution & Usage

All 300 lesson scripts are configured for CommonJS (`"type": "commonjs"` in [package.json](package.json)) and can be executed directly with Node.js, including Module 14 DOM lessons that include built-in simulation fallbacks when executed outside a browser.

1. Open a terminal in the repository root directory.
2. Run any lesson script directly with `node` by passing its module folder and filename:

```bash
# Module 01: Core syntax
node module-01-pengenalan-javascript-dan-struktur-program/01_hello_world.js

# Module 12: Assertions with node:assert
node module-12-error-handling-dan-debugging/191_assert_module.js

# Module 16: Express REST API example (requires npm install)
node module-16-node-js-dan-backend-programming/270_express_rest_api.js

# Module 17: Custom unit testing example
node module-17-algoritma-testing-dan-keamanan/285_unit_testing.js

# Module 18: Capstone task manager state controller
node module-18-proyek-praktik-javascript/300_fullstack_task_manager_project.js
```

3. Compare your terminal output against the captured PNG reference inside each module's `output/` directory or open the module's `README.md` for Indonesian lesson notes and expected behavior.

## Contributing

Contributions that improve lesson clarity, fix bugs in examples, or expand exercises and documentation are welcome. Follow this workflow when proposing changes:

1. Fork the repository.
2. Create a branch for the change.
3. Add or improve learning materials, source code, exercises, or documentation.
4. Verify code examples and links where practical.
5. Commit and push the branch.
6. Open a pull request with a clear explanation.

## License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.

## Author & Contact

**Yohanes Dimas Pratama**

- GitHub: [github.com/weztcy](https://github.com/weztcy)
- Portfolio: [yohanesdimas.com](https://yohanesdimas.com)
- LinkedIn: [linkedin.com/in/yohanes-dimas](https://www.linkedin.com/in/yohanes-dimas)
