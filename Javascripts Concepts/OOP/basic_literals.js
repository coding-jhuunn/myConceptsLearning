const s1 = "Hello";
console.log(typeof s1);
//es5
//DOM OBJECTS
// window.alert(1);

//Objects Literals

const book1 = {
  title: "Book 1",
  author: "Author 1",
  year: "2023",
  getSummary: function () {
    return this.title + " by " + this.author + " was published in " + this.year;
  },
};

const book2 = {
  title: "Book 2",
  author: "Author 2",
  year: "2022",
  getSummary: function () {
    return this.title + " by " + this.author + " was published in " + this.year;
  },
};
