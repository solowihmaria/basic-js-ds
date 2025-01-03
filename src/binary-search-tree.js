const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


// Класс узла дерева
class Node {
  constructor(data) {
    this.data = data; // значение узла
    this.left = null; // левый дочерний узел
    this.right = null; // лравый дочерний узел
  }
}

// Класс бинарного дерева поиска
class BinarySearchTree {
  constructor() {
    this.rootNode = null; // начальное значение корня
  }



  // Метод для получения корня дерева
  root() {
    return this.rootNode;
  }



  // Метод для добавления узла
  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      // если дерево пустое новый узел становится корнем
      this.rootNode = newNode;
      return;
    }

    // рекурсивная функция для добавления узла в дерево
    function insertNode(current, node) {
      if (node.data < current.data) {
        // если значение меньше, идем в левую ветвь

        // если нет левого потомка, то определяем его им, если есть, вызывае функц
        if (!current.left) {
          current.left = node;
        } else {
          insertNode(current.left, node);
        }
      } else {
        // если значение больше или равно, идем в правую ветвь

        // если нет правого потомка, то определяем его им, если есть, вызывае функц
        if (!current.right) {
          current.right = node;
        } else {
          insertNode(current.right, node);
        }
      }
    }
    insertNode(this.rootNode, newNode);
  }



  // Метод для проверки наличия 
  has(data) {
    function search(current, value) {
      if (!current) return false; // если узла нет, значение не найдено
      if (current.data === value) return true; // если есть, то найдено

      // рекурсивно ищем влево или вправо
      return value < current.data ? search(current.left, value) : search(current.right, value);
    }
    return search(this.rootNode, data);
  }




  // Метод для поиска узла
  find(data) {
    function searchNode(current, value) {
      if (!current) return null; // узел не найден
      if (current.data === value) return current; 

      // ищем влево или вправо
      return value < current.data ? searchNode(current.left, value) : searchNode(current.right, value);
    }
    return searchNode(this.rootNode, data);
  }



  // Метод для удаления узла (потом ещё подумать)
  remove(data) {}




  // Метод для поиска минимума
  min() {
    function findMin(node) {
      if (!node.left) { // если у узла нет левого потомка, это минимум
        return node.data;
      }
      return findMin(node.left); // рекурсивно идем влево
    }  
    return this.rootNode ? findMin(this.rootNode) : null; // если дерево пустое
  }
  



  // Метод для поиска максимума
  max() {
    function findMax(node) {
      if (!node.right) { // если у узла нет правого потомка, это максимум
        return node.data;
      }
      return findMax(node.right); // рекурсивно идем вправо
    }  
    return this.rootNode ? findMax(this.rootNode) : null; // если дерево пустое
  }
  
}

module.exports = {
  BinarySearchTree
};