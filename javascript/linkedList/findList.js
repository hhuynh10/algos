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

const find = (head, target) => {
    let current = head;
    while(current != null){
        if (current.data == target){
            return true
        }
        current = current.next;
    }
    return false;
}

console.log(find(a, "F"))

const getNode = (head, index) => {
    let count = 0
    let current = head;
    while(current != null){
        if (count == index){
            return current.data
        }
        current = current.next;
        count++;
    }
    return null
}

console.log(getNode(a, 3))


