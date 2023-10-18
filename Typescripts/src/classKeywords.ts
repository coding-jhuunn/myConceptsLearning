//PRIVATE
class privateEmployee {
  private empCode: number;
  empName: string;
  constructor(empCode: number, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}
let privateEmp = new privateEmployee(123,"User");
// emp.empCode = 123; // Compiler Error only accessible within class
privateEmp.empName = "Swati";//OK

//PUBLIC
class PublicEmployee { //By default, all members of a class in TypeScript are public
  public empCode: string;
  empName: string;
  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}
let publicEMP = new PublicEmployee("1","User");
publicEMP.empCode = "1";
publicEMP.empName = "Swati";

//READONLY
class ROEmployee {
  readonly empCode: number;
  empName: string;
  
  constructor(code: number, name: string)     {
      this.empCode = code;
      this.empName = name;
  }
}
let roemp = new ROEmployee(10, "John");
// roemp.empCode = 20; value cannot be change
roemp.empName = 'Bill'; 

//STATIC
class Circle {
  static pi = 3.14;
  pi = 3;
}
Circle.pi; // returns 3.14
// the static property can be accessed using this keyword or using the class name Circle.pi
let circleObj = new Circle();
circleObj.pi; // returns 3

//GET AND SET
class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;
  constructor(){
    this._firstName = "";
    this._lastName = "",
    this._age = 0;
  }
  public get age() {
      return this._age;
  }
  public set age(theAge: number) {
      if (theAge <= 0 || theAge >= 200) {
          throw new Error('The age is invalid');
      }
      this._age = theAge;
  }
  public getFullName(): string {
      return `${this._firstName} ${this._lastName}`;
  }
}
