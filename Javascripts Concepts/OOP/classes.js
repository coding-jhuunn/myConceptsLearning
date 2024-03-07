//es6

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} by ${this.author} published in ${this.year}`;
  }
  getAge() {
    return new Date().getFullYear() - this.year;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
  //static methods that you can use in the class without instantiating in a object
  static getTop() {
    return "top books";
  }
}
// instanitate object

const book1 = new Book("The Hobbit", "<NAME>", 1937);

console.log(book1);
console.log(Book.getTop());
