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
    
    findSum() {
        let runner = this.head
        let sum = 0
        while(runner !== null){
            sum+=runner.data
            runner=runner.next
        }
        return sum
    }

    contain(val) {
        let runner = this.head
        while (runner !== null){
            if (runner.data == val){
                return true
            }
            runner = runner.next;
        }
        return false
    }

    length(){
        let numberOfNodes = 0;
        let runner = this.head;
        while (runner !== null){
            numberOfNodes++;
            runner = runner.next
        }
        return  "Length of list is: " + numberOfNodes;
    }

    display() {
        let runner = this.head;
        let list = []
        while (runner !== null){
            list.push(runner.data)
            runner = runner.next
        }
        return list
    }
}

LL1 = new LinkedList()
LL1.addFront(10).addFront(23).addFront(50).addFront(18).addFront(2)
console.log(LL1)
console.log(LL1.length())
console.log(LL1.display())


console.log(LL1.back())
