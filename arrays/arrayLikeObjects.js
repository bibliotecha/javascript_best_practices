// このようなオブジェクト（配列のようでいてそうでないのを)array-likeオブジェクトto
// いいます
const arrLike = { 0: 'foo', 1: 'bar', 2: 'bax', length: 3 };

//  このようなオブジェクトを配列に変換したい時には
const good = Array.from(arrLike);
console.log(good);
