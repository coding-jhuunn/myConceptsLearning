class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log("Sounding!!!!")
    }
}
class Dog extends Animal{
    super(name){
        this.name = name;
    }
    makeSound(){
        console.log("Woooof Wooooof")
    }
}

const animleOne = new Animal("Dan");
const newDog = new Dog("Ben");
console.log(animleOne.makeSound());
console.log(newDog.makeSound());