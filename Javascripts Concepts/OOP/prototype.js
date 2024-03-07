//Constructor ES5

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
//put prototype in a object
book.prototype.getSummary = function () {
  return this.title + " by " + this.author + " was published in " + this.year;
};

book.prototype.getYear = function () {
  const year = new Date().getFullYear() - this.year;
  return `${year} is the years old`;
};
book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

//instatiate an object
const book1 = new book("Book 1", "Author 1", "2012");
const book2 = new book("Book 2", "Author 2", 2015);

console.log(book2);
book2.revise(2012);
console.log(book2);
