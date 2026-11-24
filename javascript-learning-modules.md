# Portfolio Project Data — JavaScript Learning Modules

- **Category:** `code-learning` (`Code Learning`)
- **Accent Color:** `orange`
- **Target Assets Folder:** `public/images/projects/javascript_learning_modules/`
- **Required Local Images:** `banner.webp` ONLY

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "javascript-learning-modules",
  "code": "PRO-50 // CL-06",
  "title": "JavaScript Learning Modules",
  "category": "code-learning",
  "categoryLabel": "Code Learning",
  "year": "2025",
  "status": "Completed",
  "accentColor": "orange",
  "repoUrl": "https://github.com/weztcy/JavaScript-Learning-Modules",
  "license": "MIT License",
  "banner": "/images/projects/javascript_learning_modules/banner.webp",
  "summary": "Structured 18-module JavaScript curriculum with 300 runnable scripts spanning syntax, OOP, DOM, async Web APIs, Node.js, algorithms, and 12 projects.",
  "codeLearningDescription": "A comprehensive 18-module JavaScript curriculum comprising 300 standalone runnable scripts and verified output captures. Learners progress from foundational syntax, operators, functions, and OOP to DOM APIs, async concurrency, Node.js Express backends, algorithms, security, and 12 capstone projects.",
  "architectureSummary": "Modular 18-stage directory architecture pairing numbered CommonJS source scripts with per-module Markdown guides and 300 output PNG captures.",
  "techStack": [
    "JavaScript",
    "Node.js",
    "Express",
    "npm",
    "CommonJS",
    "DOM API",
    "Fetch API"
  ],
  "telemetryMatrix": {
    "projectType": "Module-Based Code Learning Curriculum",
    "targetPlatform": "Node.js Runtime & Modern Web Browsers",
    "primaryDomain": "Full-Stack JavaScript Programming",
    "architecturePipeline": "18 Modules / 300 Scripts / Output Captures",
    "testingAndAudit": "Verified",
    "projectStatus": "Completed",
    "projectYear": "2025"
  },
  "codeLearningProjectInfo": {
    "learningCategory": "Full-Stack JavaScript & Algorithms Curriculum",
    "difficultyLevel": "Beginner to Advanced",
    "programmingLanguages": "JavaScript"
  },
  "codeLearningObjectives": [
    {
      "title": "Core JavaScript Syntax & Control Flow",
      "description": "Master strict mode, variable scoping with var/let/const, primitive types, modern operators, conditional branching, and iterative loop structures.",
      "competencyCode": "COMP_01"
    },
    {
      "title": "Functional & Object-Oriented Design",
      "description": "Build reusable abstractions using closures, higher-order array pipelines, currying, generators, prototype chains, ES6 classes, private fields, and mixins.",
      "competencyCode": "COMP_02"
    },
    {
      "title": "Browser DOM & Asynchronous Web APIs",
      "description": "Manipulate DOM elements, delegate events, manage browser storage, and coordinate non-blocking tasks via the Event Loop, Promises, async/await, and Fetch.",
      "competencyCode": "COMP_03"
    },
    {
      "title": "Node.js Backends, Algorithms & Security",
      "description": "Develop Express REST APIs and file/HTTP utilities while implementing classic search/sort algorithms, unit/integration tests, and XSS input sanitization.",
      "competencyCode": "COMP_04"
    }
  ],
  "codeLearningPrerequisites": [
    {
      "category": "Tooling & Runtime Setup",
      "items": [
        "Node.js CLI Runtime",
        "npm Package Manager",
        "Code Editor (VS Code or equivalent)"
      ],
      "description": "Learners execute all 300 CommonJS modules locally through the Node.js CLI and install Express via npm for backend and REST API modules."
    },
    {
      "category": "Foundational Knowledge",
      "items": [
        "Basic Terminal Navigation",
        "No Prior Coding Experience Required for Module 01"
      ],
      "description": "The curriculum starts from Hello World and program structure before incrementally introducing browser APIs, backend services, and algorithmic complexity."
    }
  ],
  "codeLearningCurriculumStructure": {
    "summary": "Designed as a four-phase progression across 18 modules and 300 numbered lessons, the curriculum builds core syntax and data structures first, advances into OOP, metaprogramming, and error resilience, then bridges browser DOM, async APIs, Node.js backends, algorithms, and 12 applied projects.",
    "totalEstimatedHours": "90 Hours",
    "phases": [
      {
        "phaseNumber": "01",
        "phaseTitle": "JavaScript Fundamentals & Control Flow",
        "difficulty": "Beginner",
        "moduleRange": "Modules 01 - 05",
        "topics": [
          "Program Structure & Strict Mode",
          "Variables, Scope & Primitive Types",
          "Input/Output & Modern Operators",
          "Conditionals & Loop Patterns"
        ]
      },
      {
        "phaseNumber": "02",
        "phaseTitle": "Functions, Collections & Object-Oriented Design",
        "difficulty": "Intermediate",
        "moduleRange": "Modules 06 - 11",
        "topics": [
          "Closures, Higher-Order Functions & Currying",
          "Arrays, Strings, Objects, Map & Set",
          "Generators, Iterators & this Binding",
          "Prototypes, ES6 Classes, Proxy & Reflect"
        ]
      },
      {
        "phaseNumber": "03",
        "phaseTitle": "Resilience, Browser DOM, Async & Backend Systems",
        "difficulty": "Intermediate",
        "moduleRange": "Modules 12 - 16",
        "topics": [
          "Error Handling, Assertions & Tooling",
          "DOM Manipulation, Events & Observers",
          "Event Loop, Promises, async/await & Fetch",
          "Node.js Core Modules & Express REST APIs"
        ]
      },
      {
        "phaseNumber": "04",
        "phaseTitle": "Algorithms, Testing, Security & Capstone Projects",
        "difficulty": "Advanced",
        "moduleRange": "Modules 17 - 18",
        "topics": [
          "Search, Sort, Trees, Graphs & Dynamic Programming",
          "Unit Testing, Integration Testing & XSS Prevention",
          "12 Practical End-to-End JavaScript Projects"
        ]
      }
    ]
  },
  "codeLearningModules": [
    {
      "id": "mod-01",
      "moduleNumber": "01",
      "title": "Introduction to JavaScript & Program Structure",
      "description": "Introduces JavaScript syntax, comments, console output methods, semicolons, case sensitivity, strict mode, and runtime execution.",
      "submoduleCount": 10,
      "difficulty": "Beginner",
      "keyTopics": ["Program Structure", "Console Methods", "Strict Mode", "JavaScript Runtime"],
      "sourceFilesCount": 10,
      "estimatedHours": "2.5 Hours"
    },
    {
      "id": "mod-02",
      "moduleNumber": "02",
      "title": "Variables & Data Types",
      "description": "Covers var, let, and const declarations, lexical/block scoping, all seven primitive data types, typeof inspection, and dynamic typing.",
      "submoduleCount": 14,
      "difficulty": "Beginner",
      "keyTopics": ["var/let/const", "Variable Scope", "BigInt & Symbol", "Dynamic Typing"],
      "sourceFilesCount": 14,
      "estimatedHours": "3.5 Hours"
    },
    {
      "id": "mod-03",
      "moduleNumber": "03",
      "title": "Input, Output & Operators",
      "description": "Explores Node.js readline input, type conversion, arithmetic, logical and comparison operators, strict equality, nullish coalescing, and optional chaining.",
      "submoduleCount": 14,
      "difficulty": "Beginner",
      "keyTopics": ["CLI Input", "Type Coercion", "Nullish Coalescing", "Optional Chaining"],
      "sourceFilesCount": 14,
      "estimatedHours": "3.5 Hours"
    },
    {
      "id": "mod-04",
      "moduleNumber": "04",
      "title": "Conditionals & Decision Making",
      "description": "Teaches if/else/switch branching, truthy and falsy evaluation, short-circuit logic, and practical decision workflows like grade and discount calculators.",
      "submoduleCount": 12,
      "difficulty": "Beginner",
      "keyTopics": ["If-Else & Switch", "Truthy & Falsy", "Short-Circuiting", "Login Validation"],
      "sourceFilesCount": 12,
      "estimatedHours": "3 Hours"
    },
    {
      "id": "mod-05",
      "moduleNumber": "05",
      "title": "Loops & Iteration",
      "description": "Demonstrates for, while, do-while, for...of, and for...in loops alongside break/continue control and algorithmic number pattern exercises.",
      "submoduleCount": 14,
      "difficulty": "Beginner",
      "keyTopics": ["For & While Loops", "for...of & for...in", "Nested Loops", "Factorial & Patterns"],
      "sourceFilesCount": 14,
      "estimatedHours": "3.5 Hours"
    },
    {
      "id": "mod-06",
      "moduleNumber": "06",
      "title": "Functions & Lexical Scope",
      "description": "Covers function declarations, expressions, arrow functions, rest/default parameters, closures, callbacks, higher-order functions, recursion, and IIFEs.",
      "submoduleCount": 18,
      "difficulty": "Intermediate",
      "keyTopics": ["Arrow Functions", "Closures", "Higher-Order Functions", "Recursion & IIFE"],
      "sourceFilesCount": 18,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-07",
      "moduleNumber": "07",
      "title": "Arrays & String Manipulation",
      "description": "Deep dives into array indexing, slice/splice, map/filter/reduce, find/some/every, destructuring, spread syntax, string methods, and template literals.",
      "submoduleCount": 22,
      "difficulty": "Intermediate",
      "keyTopics": ["map/filter/reduce", "Destructuring & Spread", "flat & flatMap", "Template Literals"],
      "sourceFilesCount": 22,
      "estimatedHours": "6 Hours"
    },
    {
      "id": "mod-08",
      "moduleNumber": "08",
      "title": "Objects & Data Management",
      "description": "Examines object properties, methods, destructuring, Object.freeze/seal, reference semantics, shallow vs deep copies, Map, Set, WeakMap, and WeakSet.",
      "submoduleCount": 18,
      "difficulty": "Intermediate",
      "keyTopics": ["Object Immutability", "Shallow vs Deep Copy", "Map & Set", "WeakMap & WeakSet"],
      "sourceFilesCount": 18,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-09",
      "moduleNumber": "09",
      "title": "Advanced Function Concepts",
      "description": "Covers currying, function composition, partial application, memoization, explicit this binding with call/apply/bind, generators, yield, and custom iterators.",
      "submoduleCount": 18,
      "difficulty": "Intermediate",
      "keyTopics": ["Currying & Composition", "Memoization", "call/apply/bind", "Generators & Iterators"],
      "sourceFilesCount": 18,
      "estimatedHours": "5.5 Hours"
    },
    {
      "id": "mod-10",
      "moduleNumber": "10",
      "title": "Object-Oriented Programming (OOP)",
      "description": "Bridges constructor functions and prototype chains with ES6 classes, static/instance methods, private fields, inheritance, polymorphism, composition, and mixins.",
      "submoduleCount": 20,
      "difficulty": "Intermediate",
      "keyTopics": ["Prototype Chain", "ES6 Classes & #Fields", "Inheritance & Super", "Mixins & Composition"],
      "sourceFilesCount": 20,
      "estimatedHours": "6 Hours"
    },
    {
      "id": "mod-11",
      "moduleNumber": "11",
      "title": "Built-in Objects & Language Features",
      "description": "Explores Math, Number, BigInt, Date, RegExp groups/replacement, JSON serialization, Proxy, Reflect API, property descriptors, and structuredClone.",
      "submoduleCount": 20,
      "difficulty": "Intermediate",
      "keyTopics": ["RegExp & Date", "JSON & structuredClone", "Proxy & Reflect", "Logical Assignment"],
      "sourceFilesCount": 20,
      "estimatedHours": "5.5 Hours"
    },
    {
      "id": "mod-12",
      "moduleNumber": "12",
      "title": "Error Handling & Debugging",
      "description": "Focuses on try-catch-finally blocks, custom Error subclasses, error propagation, stack trace inspection, input validation, node:assert, and resilient error patterns.",
      "submoduleCount": 12,
      "difficulty": "Intermediate",
      "keyTopics": ["Custom Errors", "Stack Trace Debugging", "node:assert", "Resilient Patterns"],
      "sourceFilesCount": 12,
      "estimatedHours": "3.5 Hours"
    },
    {
      "id": "mod-13",
      "moduleNumber": "13",
      "title": "Modules, Packages & Tooling",
      "description": "Compares ES Modules and CommonJS require/exports alongside dynamic imports, module scope, package.json anatomy, npm scripts, environment variables, ESLint, and Prettier.",
      "submoduleCount": 14,
      "difficulty": "Intermediate",
      "keyTopics": ["ESM vs CommonJS", "Dynamic Import", "package.json & npm", "ESLint & Prettier"],
      "sourceFilesCount": 14,
      "estimatedHours": "4 Hours"
    },
    {
      "id": "mod-14",
      "moduleNumber": "14",
      "title": "DOM & Browser Programming",
      "description": "Covers DOM element selection, traversal, attribute/class manipulation, event bubbling/delegation, FormData, Web Storage, History API, and Observers with Node-safe fallbacks.",
      "submoduleCount": 24,
      "difficulty": "Intermediate",
      "keyTopics": ["DOM Selection & Events", "Event Delegation", "Web Storage & URL API", "Intersection & Mutation Observer"],
      "sourceFilesCount": 24,
      "estimatedHours": "7 Hours"
    },
    {
      "id": "mod-15",
      "moduleNumber": "15",
      "title": "Asynchronous JavaScript & Web APIs",
      "description": "Explains timers, Call Stack, Event Loop, Microtask Queue, Promises (all/allSettled/race), async/await, Fetch GET/POST, AbortController, Web Workers, and WebSockets.",
      "submoduleCount": 20,
      "difficulty": "Advanced",
      "keyTopics": ["Event Loop & Microtasks", "Promises & async/await", "Fetch & AbortController", "Web Workers & WebSocket"],
      "sourceFilesCount": 20,
      "estimatedHours": "6.5 Hours"
    },
    {
      "id": "mod-16",
      "moduleNumber": "16",
      "title": "Node.js & Backend Programming",
      "description": "Teaches Node.js process/CLI, file system, streams, buffers, events, HTTP servers/clients, crypto hashing, environment configuration, and Express REST APIs.",
      "submoduleCount": 20,
      "difficulty": "Advanced",
      "keyTopics": ["node:fs & Streams", "HTTP Server & Crypto", "EventEmitter & Buffers", "Express Routing & REST API"],
      "sourceFilesCount": 20,
      "estimatedHours": "7 Hours"
    },
    {
      "id": "mod-17",
      "moduleNumber": "17",
      "title": "Algorithms, Testing & Security",
      "description": "Implements linear/binary search, five sorting algorithms, stacks, queues, linked lists, binary trees, BFS/DFS, dynamic programming, custom unit/integration tests, and XSS defense.",
      "submoduleCount": 18,
      "difficulty": "Advanced",
      "keyTopics": ["Search & Sort Algorithms", "Trees, Graphs & DP", "Unit & Integration Tests", "XSS & Input Security"],
      "sourceFilesCount": 18,
      "estimatedHours": "6.5 Hours"
    },
    {
      "id": "mod-18",
      "moduleNumber": "18",
      "title": "Practical JavaScript Projects",
      "description": "Synthesizes the full curriculum across 12 hands-on mini-applications ranging from OOP calculators and quizzes to Express product APIs and full-stack task controllers.",
      "submoduleCount": 12,
      "difficulty": "Advanced",
      "keyTopics": ["OOP CLI Applications", "Map & Array State Engines", "Express Product REST API", "Task Manager Controller"],
      "sourceFilesCount": 12,
      "estimatedHours": "6.5 Hours"
    }
  ],
  "codeLearningPracticalProjects": [
    {
      "title": "Object-Oriented Math Calculator",
      "description": "Encapsulates arithmetic operations inside an ES6 class with explicit zero-division error handling.",
      "highlights": [
        "Encapsulated arithmetic methods",
        "Runtime zero-division Error guard"
      ],
      "coreScope": "Class method design and exception throwing",
      "trackTag": "Project 289",
      "tier": "Core",
      "difficulty": "Beginner",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "Zero external dependencies",
        "Must throw explicit Error on division by zero"
      ]
    },
    {
      "title": "Number Guessing Game Engine",
      "description": "Tracks player guess history, game completion state, and directional hints in a stateful class.",
      "highlights": [
        "Stateful attempt history array",
        "Completion lock preventing post-win moves"
      ],
      "coreScope": "State management and conditional feedback",
      "trackTag": "Project 290",
      "tier": "Core",
      "difficulty": "Beginner",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "Persist attempt count in class instance",
        "Guard against inputs after game completion"
      ]
    },
    {
      "title": "Interactive Quiz Evaluator",
      "description": "Evaluates indexed quiz responses against an answer key, accumulates weighted points, and reports final scores.",
      "highlights": [
        "Indexed question-answer validation",
        "Automated score tallying and summary"
      ],
      "coreScope": "Array-backed question bank and scoring",
      "trackTag": "Project 291",
      "tier": "Core",
      "difficulty": "Beginner",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "Separate question bank data from evaluator class",
        "Deterministic score calculation"
      ]
    },
    {
      "title": "To-Do List State Manager",
      "description": "Manages task creation, ID-based completion toggling, and formatted checklist rendering.",
      "highlights": [
        "Incremental task ID assignment",
        "Array find-and-toggle mutation flow"
      ],
      "coreScope": "CRUD array state and console formatting",
      "trackTag": "Project 292",
      "tier": "Core",
      "difficulty": "Beginner",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "In-memory array storage",
        "Graceful no-op on unknown task IDs"
      ]
    },
    {
      "title": "Expense Tracker & Aggregator",
      "description": "Records categorized expenses, computes total spending using Array.prototype.reduce, and formats currency output.",
      "highlights": [
        "Functional reduce aggregation",
        "Locale-formatted currency reporting"
      ],
      "coreScope": "Financial ledger aggregation",
      "trackTag": "Project 293",
      "tier": "Core",
      "difficulty": "Intermediate",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "Use reduce() for total calculation",
        "Format amounts with id-ID locale"
      ]
    },
    {
      "title": "Student Grade Classification System",
      "description": "Assigns letter grades (A/B/C) using threshold rules and prints structured cohort evaluation summaries.",
      "highlights": [
        "Threshold-based grade mapping",
        "Structured cohort report generation"
      ],
      "coreScope": "Rule-based data transformation",
      "trackTag": "Project 294",
      "tier": "Core",
      "difficulty": "Beginner",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "Deterministic threshold mapping",
        "Pure console summary output"
      ]
    },
    {
      "title": "SKU Inventory Management System",
      "description": "Tracks product quantities keyed by SKU inside a Map collection with guarded stock reduction checks.",
      "highlights": [
        "O(1) SKU lookup via ES6 Map",
        "Stock sufficiency guard before deduction"
      ],
      "coreScope": "Map-backed inventory state controller",
      "trackTag": "Project 295",
      "tier": "Core",
      "difficulty": "Intermediate",
      "estimatedTime": "35 Minutes",
      "architecturalConstraints": [
        "Use Map for SKU registry",
        "Prevent negative stock balances"
      ]
    },
    {
      "title": "Async Weather Service Client",
      "description": "Simulates asynchronous weather API queries using async class methods and Promise chaining.",
      "highlights": [
        "Async method returning structured telemetry",
        "Promise .then() consumer pipeline"
      ],
      "coreScope": "Asynchronous service abstraction",
      "trackTag": "Project 296",
      "tier": "Core",
      "difficulty": "Intermediate",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "Non-blocking async/Promise contract",
        "Offline-safe mock service response"
      ]
    },
    {
      "title": "Genre-Based Movie Search Catalog",
      "description": "Filters a structured film catalog case-insensitively by genre and maps matching titles for display.",
      "highlights": [
        "Case-insensitive filter predicate",
        "Chained filter and map projection"
      ],
      "coreScope": "Collection querying and projection",
      "trackTag": "Project 297",
      "tier": "Core",
      "difficulty": "Intermediate",
      "estimatedTime": "30 Minutes",
      "architecturalConstraints": [
        "Immutable catalog filtering",
        "Case-normalized search comparison"
      ]
    },
    {
      "title": "Express Product Catalog REST API",
      "description": "Configures an Express application with JSON body middleware and exposes a GET /api/produk JSON endpoint.",
      "highlights": [
        "Express JSON middleware setup",
        "RESTful GET /api/produk route handler"
      ],
      "coreScope": "Backend HTTP routing with Express",
      "trackTag": "Project 298",
      "tier": "Advanced",
      "difficulty": "Advanced",
      "estimatedTime": "45 Minutes",
      "architecturalConstraints": [
        "Express CommonJS integration",
        "Structured JSON response payload"
      ]
    },
    {
      "title": "Real-Time Chat Room Dispatcher",
      "description": "Models channel-scoped message broadcasting with sender attribution and localized timestamps.",
      "highlights": [
        "Room-scoped message log",
        "Automated timestamp enrichment"
      ],
      "coreScope": "Event-style messaging room model",
      "trackTag": "Project 299",
      "tier": "Advanced",
      "difficulty": "Advanced",
      "estimatedTime": "45 Minutes",
      "architecturalConstraints": [
        "Maintain ordered message history per room",
        "Attach localized timestamp per message"
      ]
    },
    {
      "title": "Full-Stack Task Manager Controller",
      "description": "Implements a workflow state controller transitioning tasks across Todo, In Progress, and Done statuses.",
      "highlights": [
        "Multi-stage workflow status transitions",
        "Aligned dashboard summary output"
      ],
      "coreScope": "End-to-end task state controller",
      "trackTag": "Project 300",
      "tier": "Advanced",
      "difficulty": "Advanced",
      "estimatedTime": "45 Minutes",
      "architecturalConstraints": [
        "Support create and status update operations",
        "Formatted status-aligned dashboard log"
      ]
    }
  ],
  "codeLearningOutcomes": [
    {
      "pillar": "Core Language & Functional Fluency",
      "skills": [
        {
          "title": "Modern ECMAScript & Functional Pipelines",
          "description": "Write idiomatic JavaScript utilizing block scoping, destructuring, spread, closures, currying, memoization, and array transformations."
        },
        {
          "title": "Object Modeling & Metaprogramming",
          "description": "Design class hierarchies with private fields, prototypes, mixins, Proxy traps, Reflect APIs, and Map/Set data structures."
        }
      ]
    },
    {
      "pillar": "Browser & Asynchronous Engineering",
      "skills": [
        {
          "title": "DOM & Event Architecture",
          "description": "Query and mutate DOM trees, handle event bubbling and delegation, validate forms, and persist state in browser storage."
        },
        {
          "title": "Non-Blocking Concurrency",
          "description": "Coordinate asynchronous workflows using Event Loop microtasks, Promise combinators, async/await, Fetch API, and AbortController."
        }
      ]
    },
    {
      "pillar": "Backend Services, Algorithms & Quality",
      "skills": [
        {
          "title": "Node.js & Express API Development",
          "description": "Build CLI tools, file/stream processors, HTTP servers, cryptographic helpers, and Express REST endpoints."
        },
        {
          "title": "Algorithmic Thinking, Testing & Security",
          "description": "Implement search/sort algorithms, graphs, dynamic programming, assertion-based unit/integration tests, and XSS sanitization."
        }
      ]
    }
  ],
  "codeLearningCurriculumSpecs": {
    "curriculumTrack": "Full-Stack JavaScript Track",
    "primaryLanguage": "JavaScript",
    "executionRuntime": "Node.js and Browser",
    "testVerification": "Custom Assertions and Outputs"
  },
  "codeLearningSupplementaryResources": [
    {
      "title": "Per-Module Curriculum Guides",
      "description": "Dedicated Indonesian Markdown guides inside each of the 18 module directories documenting objectives, submodule summaries, run commands, and expected results.",
      "resources": [
        {
          "name": "Module 01 - 18 README.md Index Guides",
          "type": "Reference Guide",
          "format": "MD"
        }
      ]
    },
    {
      "title": "Verified Execution Output Captures",
      "description": "Pre-captured PNG terminal screenshots stored inside each module's output/ folder corresponding 1-to-1 with all 300 numbered source files.",
      "resources": [
        {
          "name": "300 Submodule Output Captures (output/*.png)",
          "type": "Execution Output",
          "format": "PNG"
        }
      ]
    }
  ]
}
```
