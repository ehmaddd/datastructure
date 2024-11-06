class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1); // Assuming it's an undirected graph
    }

    iterativeDFS(startNode) {
        const stack = [];
        const visited = new Set(); // Using a Set to track visited nodes

        stack.push(startNode);
        console.log(`Push: ${startNode}`); // Log the push operation

        while (stack.length > 0) {
            const currentNode = stack.pop();
            console.log(`Pop: ${currentNode}`); // Log the pop operation

            if (!visited.has(currentNode)) {
                visited.add(currentNode); // Mark the node as visited
                console.log(`Visited: ${currentNode}`); // Process the node (e.g., print it)

                // Add unvisited neighbors to the stack
                for (const neighbor of this.adjacencyList[currentNode]) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                        console.log(`Push: ${neighbor}`); // Log the push operation
                    }
                }
            }
        }
    }
}

// Example usage
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

// Perform DFS starting from node A
graph.iterativeDFS('A');