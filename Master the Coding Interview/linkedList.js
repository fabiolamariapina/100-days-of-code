// 10 -> 5 -> 16

// create an object representing linked list
// let myLinkedList = {
//     // head: the first propery of object representing linked list
//     // has node, aka a bucket of data, represented within an object
//     head: {
//         value: 10,
//         next: { // next item in list
//             value: 5,
//             next: { // next item in list
//                 value: 16, 
//                 next: null, // end of the list
//             }
//         }
//     }
// }

// Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// create class that will instantiate a linked list
class LinkedList {
    constructor(value) { //value of the head
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        // create node we're going to add
        const newNode = new Node(value);
        // new node will point to head
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);