class Stack {
    constructor(size) {
        this.size = size;          // Maximum size of the stack
        this.stack = new Array(size); // Array to store stack elements
        this.top = -1;            // Initialize the top index
    }

    isEmpty() {
        return this.top === -1;   // Returns true if stack is empty
    }

    isFull() {
        return this.top === this.size - 1; // Returns true if stack is full
    }

    push(item) {
        if (this.isFull()) {
            console.log("Stack Overflow");
        } else {
            this.top++;
            this.stack[this.top] = item; // Add item to the stack
            console.log(`Pushed ${item} onto stack`);
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return null; // Return null if stack is empty
        } else {
            const poppedItem = this.stack[this.top]; // Get the top item
            this.top--; // Decrement the top index
            console.log(`Popped ${poppedItem} from stack`);
            return poppedItem; // Return the popped item
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null; // Return null if stack is empty
        } else {
            return this.stack[this.top]; // Return the top item
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            console.log("Stack elements:");
            for (let i = this.top; i >= 0; i--) {
                console.log(this.stack[i]); // Print elements from top to bottom
            }
        }
    }
}

// Example usage
const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
console.log("Top element is:", stack.peek());
stack.pop();
stack.display();