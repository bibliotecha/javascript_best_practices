/**
 * Arrayに追加する時にはpushを使いましょう
 */

const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
