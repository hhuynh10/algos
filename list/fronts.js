class SLLNode {
    constructor(val){
        this.val = val;
        this .next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront(){
        if(this.head == null){
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }
}

var mySLL = new SLL();
mySLL.addFront(10).addFront(5).addFront(3).removeFront()

console.log(mySLL)