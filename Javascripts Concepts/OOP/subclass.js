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
}

//magazines subclass

class Magazines extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
// instanitate object

const mag1 = new Magazines("title", "1", "2000", "Kan");
console.log(mag1);
