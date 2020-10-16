/**
 * オブジェクトのプロパティにquoteはなるべく使わないようにしましょう。
 */
// bad
const bad = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5, // '-'があるため必要
};
