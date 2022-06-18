class Stack {
    constructor(){
        this.storage = [];
    }
    push(item){
        this.storage.push(item);
    }
    pop(){
        return this.storage.pop();
    }
    size(){
        return this.storage.length;
    }   
}

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);






















