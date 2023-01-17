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

    back(){
        let runner = this.head;
        while (runner !== null){
            if (runner.data.next == null){
                return "Last value: " + runner.data
            }
            runner = runner.next;
        }
    }

    removeBack(){
        let runner = this.head;
        while (runner.next.next){
            runner = runner.next;
        }
        runner.next = null
        return this
    }

    addBack(val){
        let runner = this.head;
        while (runner.next){
            runner = runner.next
        }
        runner.next = new Node(val);
        return this
    }
}

LL1 = new LinkedList()
LL1.addFront(18).addFront(11).addFront(3).addFront(7).addFront(21).addBack(17)

console.log(LL1)

console.log(LL1.back())