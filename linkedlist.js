class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // points to the nextr node in our linked list
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // we dont need a tail for this senerios just an Idea of where it would go
    this.l = 0;
  }
  add(value) {
    // instantiation of a new node
    const newNode = new Node(value);
    this.l++;
    // it the linked list is empty then  add the new node to the linked list
    if (!this.head) {
      this.head = newNode;
    } else {
      //   We create a currNode as a place holder this allows us to loop through the linkedlist and establish where the tail is.
      let currNode = this.head;
      // We are looping till we find the tail
      while (currNode.next) {
        currNode = currNode.next;
      }
      // once tail is found we add the new node to the end of the linked list.
      currNode.next = newNode;

      this.tail = newNode;
    }
  }
  // display loops through the linked list and console.logs each iteration.
  display() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode);
      currNode = currNode.next;
    }
  }
}

const LL = new LinkedList();
LL.add("charmander");
LL.add("charmaleon");
LL.add("charizard");
LL.add("bulbasaur");
LL.add("Ivysaur");
LL.add("Venasaur");
console.log(LL);
// LL.display();
