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
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        // goal: add a value before 10
        // myLinkedList.prepend(10)
        // create characteristic of node
        const firstNode = {
            value: value,
            next: this.head
        }
        // link it to next node
        this.tail.next = firstNode;
        this.tail = firstNode;
        this.length++;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);