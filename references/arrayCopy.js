/**
 * arrayの中身をコピーしたい時にはcomplex typeであるため、そのまま新しい
 * 変数割り当てることができません。
 */
const bad = [1, 2, 3];
const bad1 = bad; // これだと今後badも影響されてしまう

// very bad
const veryBad = { a: 1, b: 2 };
const veryBadCopy = Object.assign(veryBad, { c: 3 }); //　これをするとVeryBadにも{c:3}が追加されてしまう
console.log(veryBad); // {a: 1, b: 2, c: 3}
console.log(veryBadCopy); // {a: 1, b: 2, c: 3}

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
