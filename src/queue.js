const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.items = []; // инициализируем пустой массив для хранения элементов очереди
  }

  // метод для добавления  в конец очереди
  enqueue(value) {
    this.items.push(value); // добавляем элемент в конец массива
  }

  // метод для удаления  из начала очереди
  dequeue() {
    if (this.items.length === 0) {
      // если очередь пуста
      return null;
    }
    return this.items.shift(); // удаляем и возвращаем первый элемент массива
  }

  // метод для получения текущего состояния очереди
  getUnderlyingList() {
    // преобразуем массив this.items в связанный список с конца к началу
    const list = this.items.reduceRight((next, value) => {
      // на каждой итерации создаем новый узел связанного списка ( содержит текущ и ссылку на след)
      return { value, next };
    },null);//начальное значение (next) последнего эл т.к. он не ссылается

    return list;
  }
}

module.exports = {
  Queue
};
