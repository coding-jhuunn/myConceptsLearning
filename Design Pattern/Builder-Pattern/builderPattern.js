class Address{
    constructor(zip,place){
        this.zip = zip;
        this.place = place;
    }
}
class User {
    constructor(name,{age,phone,address}){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let newUser = new User('Bob',{age:30, address: new Address(1,"US")});
console.log(newUser);