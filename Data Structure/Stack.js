
function Stack (){
    this.collection = [];
    this.push = function(value){
        this.collection.push(value);
       
        console.log(this.collection);
    }
    this.peek = function(value){
        console.log(this.collection[this.collection.length - 1]);
    }
    this.castup = function(){
        console.log(this.collection.length);
    }
    this.pop = function(){
        this.collection.pop();
    }
}
let newStack = new Stack;
newStack.push("asd");
newStack.push("asd");
newStack.push("asdwqe");
newStack.peek();
newStack.castup();
newStack.push("asasddwqe");
newStack.castup();
newStack.peek();
newStack.pop();

newStack.castup();
newStack.peek();