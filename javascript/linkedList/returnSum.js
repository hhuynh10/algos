class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const a = new Node(7);
const b = new Node(10);
const c = new Node(-2);
const d = new Node(8);
const f = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = f;

const total = (head) => {
    let sum = 0;
    let current = head;
    while (current != null){
        sum += current.data;
        current = current.next;
    }
    console.log(sum)
    return sum;
}

total(a);