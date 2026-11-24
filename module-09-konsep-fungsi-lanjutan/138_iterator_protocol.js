// Iterator Protocol: Objek yang memiliki metode next() yang mengembalikan { value, done }

const koleksiKustom = {
  items: ["Alpha", "Beta", "Gamma"],
  [Symbol.iterator]: function() {
    let indeks = 0;
    const items = this.items;
    
    return {
      next: function() {
        if (indeks < items.length) {
          return { value: items[indeks++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

console.log("Iterasi objek yang mengimplementasikan Iterator Protocol:");
for (const item of koleksiKustom) {
  console.log("- " + item);
}
