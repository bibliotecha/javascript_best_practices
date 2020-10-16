let foo = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

// good
const good = Array.from(foo);
console.log(good);
// best
const best = [...foo];
console.log(best);
