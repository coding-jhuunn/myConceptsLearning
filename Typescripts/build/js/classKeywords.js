"use strict";
//PRIVATE
class privateEmployee {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
let privateEmp = new privateEmployee(123, "User");
// emp.empCode = 123; // Compiler Error only accessible within class
privateEmp.empName = "Swati"; //OK
//PUBLIC
class PublicEmployee {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
let publicEMP = new PublicEmployee("1", "User");
publicEMP.empCode = "1";
publicEMP.empName = "Swati";
//READONLY
class ROEmployee {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
}
let roemp = new ROEmployee(10, "John");
// roemp.empCode = 20; value cannot be change
roemp.empName = 'Bill';
//STATIC
class Circle {
    constructor() {
        this.pi = 3;
    }
}
Circle.pi = 3.14;
Circle.pi; // returns 3.14
// the static property can be accessed using this keyword or using the class name Circle.pi
let circleObj = new Circle();
circleObj.pi; // returns 3
//GET AND SET
class Person {
    constructor() {
        this._firstName = "";
        this._lastName = "",
            this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
