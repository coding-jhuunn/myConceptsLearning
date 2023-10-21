class Stack {
    collection:number[] = [1,3]

    getAdd(value:number){
        this.collection.push(value);
    }
    getPeek(){
        return this.collection[this.collection.length-1];
    }
    getCast(){
        return this.collection;
    }
    getPop(){
      this.collection.pop();
    }

}

const newStack = new Stack;

newStack.getAdd(55);

console.log(newStack.getPeek());
console.log(newStack.getCast());
newStack.getPop();
console.log(newStack.getCast());