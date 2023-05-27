/**
 * In this example, we define two classes: Node and LinkedList. The Node class represents a single node in the linked list, while the LinkedList class is responsible for managing the list itself.

The Node class has two properties: data to store the value of the node and next to store a reference to the next node in the list.

The LinkedList class has a head property to keep track of the first node and a tail property to point to the last node. It provides various methods:

isEmpty() checks if the linked list is empty.
append(data) adds a new node with the given data to the end of the list.
prepend(data) adds a new node with the given data to the beginning of the list.
delete(data) removes the first occurrence of a node with the given data from the list.
search(data) searches for a node with the given data and returns true if found, false otherwise.
print() displays the elements of the linked list in order.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(data) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current;
        }
        return;
      }
      current = current.next;
    }
  }

  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

// Create a linked list
const linkedList = new LinkedList();

// Append elements
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

// Prepend an element
linkedList.prepend(5);

// Print the list
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30

// Delete an element
linkedList.delete(20);

// Search for an element
console.log(linkedList.search(20)); // Output: false
console.log(linkedList.search(30)); // Output: true
