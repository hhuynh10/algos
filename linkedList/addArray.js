class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const f = new Node("F");

a.next = b;
b.next = c;
c.next = d;
d.next = f;


// Linked list
const addArr = (head) => {
    let current = head;
    let arr = []
    while (current !== null){
        arr.push(current.data);
        current = current.next
    }
    return arr
}

console.log(addArr(a))


// Recursion
const rAddArr = (head) => {
    let arr = [];
    fillArr(head, arr)
    return arr
}

const fillArr = (head, arr) => {
    let current = head
    if (head === null){
        return;
    }
    arr.push(current.data);
    fillArr(current.next, arr)
}

console.log(rAddArr(a))