/**
 * In this example, we define a MinHeap class that represents a min-heap data structure. The heap property is an array used to store the elements of the heap.

The class provides several helper methods to access and manipulate elements in the heap, such as getting the indices of parent, left child, and right child nodes, checking if a node has a parent or children, and swapping elements.

The peek method returns the minimum element in the heap without removing it. The insert method adds a new element to the heap while maintaining the min-heap property by performing the heapifyUp operation.

The remove method removes and returns the minimum element from the heap. It replaces the root element with the last element in the heap and performs the heapifyDown operation to restore the min-heap property.
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty.");
    }
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  remove() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty.");
    }
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

// Create a min-heap
const minHeap = new MinHeap();

// Insert elements
minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(3);
minHeap.insert(7);

// Remove and print elements in ascending order
