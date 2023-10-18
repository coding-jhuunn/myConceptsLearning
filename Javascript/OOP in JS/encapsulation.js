class Employee{
    constructor(){
        this.baseSalary = 30000,
        this.overtime = 10,
        this.rate = 10
    }
    getWage(){
        return console.log(this.baseSalary + (this.overtime*this.rate));
    }
}

let newEmployee = new Employee;

newEmployee.getWage();