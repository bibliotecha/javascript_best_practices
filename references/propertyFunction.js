/**
 * オブジェクトの中にメソッドを宣言する時にはfunctionは使わないようにしましょう
 */
const bad = {
  hello: function () {
    return 'こんにちは';
  },
};

/**
 * こちらの方が簡潔に書けるため
 */
const good = {
  hello() {
    return 'こんにちは';
  },
};
