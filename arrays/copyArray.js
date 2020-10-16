/**
 * Arrayはcomplex型なので内容をコピーするときは必ずspread operatorを使いましょう
 */

// bad 行数が多く見た目も汚い
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
