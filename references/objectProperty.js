/**
 * オブジェクトのプロパティを作る際は、なるべくオブジェクトを宣言した時にプロパティとして追加しましょう。
 */
const bad = {};
bad['id'] = 5;
bad['name'] = 'Henry';

const good = {
  id: 4,
  name: 'Bob',
};
