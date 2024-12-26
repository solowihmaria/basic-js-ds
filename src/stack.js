const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


class Stack {
  constructor() {
    // хранит элементы стека
    this.stack = [];
  }

  // добавляет элемент в стек   
  push(element) {
    // добавляем элемент в конец массива
    this.stack.push(element);
  }

  // возвращает верхний элемент стека без удаления
  peek() {
    // если массив пустой возвращаем undefined
    if (this.stack.length === 0) {
      return undefined;
    }  
    return this.stack[this.stack.length - 1];
  }

// удаляет и возвращает верхний элемент стека
  pop() {
    // если массив пуст, возвращаем undefined
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack.pop();
  }
}


module.exports = {
  Stack
};
