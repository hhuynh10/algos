class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    max() {
        let runner = this.head;
        while (runner !== null){
            if (runner.data > runner.next.data){
                return runner.data
            }
            runner = runner.next;
        }
    }

    min() {
        let runner = this.head;
        while (runner !== null){
            if (runner.data < runner.next.data){
                return runner.data
            }
            runner = runner.next;
        }
    }

    average() {
        let length = 0;
        let sum = 0;
        let runner = this.head;
        while (runner !== null){
            length++;
            sum += runner.data;
            runner = runner.next;
        }
        let avg = sum / length;
        return avg
    }
}

LL1 = new LinkedList()
LL1.addFront(12).addFront(15).addFront(20).addFront(9).addFront(1)
console.log(LL1.max())
console.log(LL1.min())
console.log(LL1.average())