class Queue {
  constructor() {
    this.element = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    // add an element to our object
    this.element[this.tail] = value;
    this.tail++;
  }
  dequeue() {
    // remove an element from our object
    const item = this.element[this.head];
    delete this.element[this.head];
    this.head++;
    return item;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Preston");
myQueue.enqueue("Alina");
myQueue.enqueue("Gabriel");

console.log(myQueue);

console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
