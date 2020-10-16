/**
 * コンプレックス型とは変数を別の変数に割り当てた新しい変数の変更がオリジナルにも影響する
 */
const foo = [1, 2];
const bar = foo;
bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
