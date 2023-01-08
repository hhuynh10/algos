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