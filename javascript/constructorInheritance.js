function Parent(name) {
  this.name = name;
}

Parent.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const john = new Child("John", 30);
john.greet();
console.log(john.age); //
