class User {
  constructor() {
    this.name = "John";
    this.age = 30;
    this.sayHi = function () {
      console.log("Hi!");
    };
  }
}
const user = new User(); // ReferenceError
console.log(user.age);
