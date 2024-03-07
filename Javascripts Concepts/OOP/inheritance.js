//es5
function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
book.prototype.getSummary = function () {
  return this.title + " by " + this.author + " was published in " + this.year;
};

function Magazines(title, author, year, month) {
  book.call(this, title, author, year, month);
  this.month = month;
}
//inherit prototype

Magazines.prototype = Object.create(book.prototype);
// instantiate magazine object
const mag1 = new Magazines("mag1", "authormag1", "2023", "January");

//use magazine constructor
Magazines.prototype.constructor = Magazines;

console.log(mag1);
