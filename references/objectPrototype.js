/**
 * オブジェクトの中にプロパティが存在しているか確認するためのメソッドである.hasOwnProperty()ですが
 * オブジェクトが存在していない場合なども考慮しなければいけません。
 */

 // bad
console.log(object.hasOwnProperty(key)); //　オブジェクトが存在していないかもしれないためダメ

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // 一度変数に入れてあげる
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));