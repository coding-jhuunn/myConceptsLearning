//  object of protos
//es5
const bookProtos = {
  getSummary: function () {
    return this.title + " by " + this.author;
  },
  getAge: function () {
    return this.age;
  },
};

//create object
// const book1 = Object.create(bookProtos);
// book1.title = "title1";
// book1.age = "22";
// book1.author = "author1";

//another way to create

const book1 = Object.create(bookProtos, {
  title: {
    value: "title1",
  },
  age: {
    value: "22",
  },
  author: {
    value: "author1",
  },
});
console.log(book1);
