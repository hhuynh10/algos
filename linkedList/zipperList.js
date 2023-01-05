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
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const f = new Node("F");
const g = new Node("G");
const h = new Node("H");

f.next = g;
g.next = h;


const zipperLists = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while (current1 != null && current2 != null){
        if (count % 2 == 0){
            tail.next = current2;
            current2 = current2.next;
        } else{
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count++;
    }
    if(current1 == null) tail.next = current1;
    if(current2 == null) tail.next = current2;
    
    return head1;
}

console.log(zipperLists(a, f))
