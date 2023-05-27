/**
 * In this example, we define a HashTable class that represents a hash table data structure. The table property is an object used to store key-value pairs.

The class provides a hash method that takes a key as input and computes the hash value for the key. In this example, we use a simple hashing algorithm that sums the ASCII values of the characters in the key.

The set method takes a key-value pair and adds it to the hash table. It computes the hash value for the key, creates a new entry in the table object if necessary, and assigns the value to the corresponding key within the hashed key.

The get method takes a key and returns the corresponding value from the hash table. It computes the hash value for the key and checks if the hashed key and key exist in the table object before returning the value.

The remove method takes a key and removes the corresponding entry from the hash table. It computes the hash value for the key and deletes the key-value pair from the table object if it exists. If the hashed key becomes empty after removing the entry, the hashed key itself is also deleted from the table object.
 */

class HashTable {
  constructor() {
    this.table = {};
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    if (!this.table.hasOwnProperty(hashedKey)) {
      this.table[hashedKey] = {};
    }
    this.table[hashedKey][key] = value;
  }

  get(key) {
    const hashedKey = this.hash(key);
    if (
      this.table.hasOwnProperty(hashedKey) &&
      this.table[hashedKey].hasOwnProperty(key)
    ) {
      return this.table[hashedKey][key];
    }
    return undefined;
  }

  remove(key) {
    const hashedKey = this.hash(key);
    if (
      this.table.hasOwnProperty(hashedKey) &&
      this.table[hashedKey].hasOwnProperty(key)
    ) {
      delete this.table[hashedKey][key];
      if (Object.keys(this.table[hashedKey]).length === 0) {
        delete this.table[hashedKey];
      }
    }
  }
}

// Create a hash table
const hashTable = new HashTable();

// Set key-value pairs
hashTable.set("name", "John");
hashTable.set("age", 25);
hashTable.set("city", "New York");

// Get values by keys
console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 25
console.log(hashTable.get("city")); // Output: New York

// Remove a key-value pair
hashTable.remove("age");
console.log(hashTable.get("age")); // Output: undefined

/**
 * In this example, we create a HashTable instance and set key-value pairs. We then retrieve the values by their keys using the get method. Finally, we remove the "age" key-value pair and attempt to retrieve it again, which returns undefined since it has been removed from the hash table.
 */
