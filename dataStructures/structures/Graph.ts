class Graph {
  nodes: number;
  adjacentList: object;
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node: string) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  addEdge(firstNode: string, secondNode: string) {
    this.adjacentList[firstNode].push(secondNode);
    this.adjacentList[secondNode].push(firstNode);
  }
  addSinglyEdge(start: string, end: string) {
    this.adjacentList[start].push(end);
  }
}

export const graph = new Graph();
