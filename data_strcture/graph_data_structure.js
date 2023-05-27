/**
 * In this example, we define a Graph class that represents an undirected graph using an adjacency list. The adjacencyList property is an object where each vertex is a key, and its value is an array of adjacent vertices.

The class provides several methods to manipulate the graph:

addVertex(vertex) adds a vertex to the graph by initializing an empty array as its adjacency list if it doesn't already exist.
addEdge(vertex1, vertex2) adds an edge between two vertices by adding each vertex to the other's adjacency list.
removeEdge(vertex1, vertex2) removes an edge between two vertices by filtering out the corresponding vertices from each other's adjacency list.
removeVertex(vertex) removes a vertex from the graph by removing all edges associated with the vertex and deleting its entry from the adjacency list.
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      throw new Error("Invalid vertex.");
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      throw new Error("Invalid vertex.");
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error("Invalid vertex.");
    }

    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

// Create a graph
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

// Remove an edge
graph.removeEdge("B", "C");

// Remove a vertex
graph.removeVertex("D");

/**
 * In this example, we create a Graph instance and add vertices "A", "B", "C", and "D" using the addVertex method. We then connect these vertices by adding edges between them using the addEdge method.

Afterwards, we remove the edge between "B" and "C" using the removeEdge method. Finally, we remove the vertex "D" from the graph using the removeVertex method.
 */
