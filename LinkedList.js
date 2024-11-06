class Node {
    constructor(data) {
      this.data = data;      // Data of the node
      this.next = null;      // Pointer to the next node
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;      // Initialize the head of the list
    }
  
    // Add a node at the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Display all nodes in the list
    display() {
      let current = this.head;
      let nodes = '';
      while (current) {
        nodes += current.data + ' -> ';
        current = current.next;
      }
      console.log(nodes + 'null');
    }
  
    // Remove a node by value
    remove(data) {
      if (!this.head) return;
  
      // If the node to be removed is the head
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
  
      // If the node was found, unlink it
      if (current.next) {
        current.next = current.next.next;
      }
    }

    reverse() {
        let previous = null;
        let current = this.head;
    
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        
        this.head = previous;
    }
  }

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.display();
list.reverse();
list.display();