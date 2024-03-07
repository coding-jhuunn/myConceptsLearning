//Constructor ES5

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return this.title + " by " + this.author + " was published in " + this.year;
  };
}

//instatiate an object
// it will automatically run
const book1 = new book("Book 1", "Author 1", "2012");
const book2 = new book("Book 2", "Author 2", "2015");

console.log(book1.title);
console.log(book2.getSummary());

//contructor helps to defined once rather than defining a thousand objects with the same methods
