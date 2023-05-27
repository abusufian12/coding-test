/**
 * In this example, we define a PriorityQueue class that uses an array (this._queue) to store the elements. The priority is associated with each item as a numeric value.

The insert method takes an item and its priority and adds it to the queue. The elements are appended to the array, and then _heapifyUp is called to ensure the min-heap property is maintained.

The delete method removes and returns the item with the highest priority (lowest value). It swaps the first and last elements, removes the last element, and then calls _heapifyDown to restore the min-heap property.

Here's an example of how you can use the PriorityQueue class:
 */

class PriorityQueue {
  constructor() {
    this._queue = [];
  }

  isEmpty() {
    return this._queue.length === 0;
  }

  insert(item, priority) {
    const element = { item, priority };
    this._queue.push(element);
    this._heapifyUp();
  }

  delete() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty.");
    }
    this._swap(0, this._queue.length - 1);
    const deletedItem = this._queue.pop().item;
    this._heapifyDown();
    return deletedItem;
  }

  _heapifyUp() {
    let index = this._queue.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this._queue[index].priority < this._queue[parentIndex].priority) {
        this._swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this._queue.length;
    while (index < length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
      if (
        leftChildIndex < length &&
        this._queue[leftChildIndex].priority <
          this._queue[smallestIndex].priority
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this._queue[rightChildIndex].priority <
          this._queue[smallestIndex].priority
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex !== index) {
        this._swap(index, smallestIndex);
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  _swap(index1, index2) {
    [this._queue[index1], this._queue[index2]] = [
      this._queue[index2],
      this._queue[index1],
    ];
  }
}

// Create a priority queue
const pq = new PriorityQueue();

// Insert items with priorities
pq.insert("Task 1", 3);
pq.insert("Task 2", 1);
pq.insert("Task 3", 2);

// Delete items based on priority
console.log(pq.delete()); // Output: Task 2
console.log(pq.delete()); // Output: Task 3
console.log(pq.delete()); // Output: Task 1

/**
 * In this example, we insert three tasks into the priority queue with different priorities.
 * When we call the delete method,
 * it removes and returns the tasks in order of their priorities (lowest priority first).
 */
