// Generic Queue class
export class Queue<T> {
    private items: T[] = [];  // Array to hold the items of type T

    // Adds an item to the queue
    enqueue(item: T): void {
        this.items.push(item);
    }

    // Removes and returns the first item in the queue
    dequeue(): T | undefined {
        return this.items.shift();  // Removes the first item from the array
    }

    // Optional: Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Optional: View the first item in the queue without removing it
    peek(): T | undefined {
        return this.items[0];
    }
}