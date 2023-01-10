class Stack {
  constructor() {
    this.pancake = [];
  }
  push(value) {
    this.pancake.push(value);
  }
  pop() {
    return this.pancake.pop();
  }
}
const myStack = new Stack();

myStack.push("1");
myStack.push("2");
myStack.push("3");

console.log(myStack);

console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
