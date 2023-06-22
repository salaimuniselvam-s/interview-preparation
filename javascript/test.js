const DeclaringFn = function (a) {
  this.a = () => {
    // console.log(a);
    return a;
  };
};
const a = new DeclaringFn("23");
a.a();

// closure
let globalVar = 2;
(function outerFn(outerArg) {
  (function innerFn(innerArg) {
    // console.log(outerArg * innerArg);
  })(7 * globalVar);
})(5);

const mul = (a) => (b) => (c) => a * b * c;
// console.log(mul(2)(3)(4));

// delete only works on object
var output = (function (x) {
  delete x;
  return x;
})(0);
// console.log(output);

// delete operator doesn't delete prototype property.
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
// console.log(Employee.hasOwnProperty("company"));
// console.log(emp1.company);

// boolean in arithmetic operation is typecasted into 0 and 1
var bar = true;
// console.log(bar + 0);
// console.log(bar + "xyz");
// console.log(bar + true);
// console.log(bar + false);

var z = 1,
  y = (z = typeof y);
// console.log(y);

// bar();
// foo();
var foo = function () {
  // Some code
};
function bar() {
  // Some code
}

var salary = "1000$";

(function () {
  // console.log("Original salary was " + salary);
  // var salary = "5000$";
  // console.log("My New Salary " + salary);
})();

class Animal {
  constructor() {
    this.legs = 4;
  }
}

const dog = new Animal();
dog.eyes = 3;
// console.log(Object.keys(dog).map((key) => Object.hasOwnProperty(key)));
// console.log(Object.getOwnPropertyNames(dog).length);

let obj = {
  helloWorld: function () {
    return "hello world, " + this.name;
  },
  name: "John Carter",
};
// console.log(obj.helloWorld());

let obj2 = {
  helloWorld: obj.helloWorld,
  name: "John Doe",
};
// console.log(obj2.helloWorld());

function User(name) {
  this.name = name || "JsGeeks";
}

var person =
  (new User("xyz")["location"] =
  new User("xyz")["locatiosn"] =
    "s,s");
// console.log(person);

var obj1 = {
  prop1: "buddy",
};
var myFunc = function () {
  console.log("Hi there", this.prop1);
};
// let's call myFunc as a function:
myFunc(); // will output "Hi there undefined" or "Hi there Window"

obj1.myMethod = myFunc;
//now we're calling myFunc as a method of obj1, so this will point to obj1
obj1.myMethod();

// ~(function () {
//   console.log("hi I'm IIFE");
// })();
// (function () {
//   console.log("hi I'm IIFE");
// })();
// +
//   (function () {
//     console.log("hi I'm IIFE");
//   })() -
//   (function () {
//     console.log("hi I'm IIFE");
//   })()(
//     (function () {
//       console.log("hi I'm IIFE");
//     })()
//   );
// var i = (function () {
//   console.log("hi I'm IIFE");
// })();
// true &&
//   (function () {
//     console.log("hi I'm IIFE");
//   })();
// 0,
//   (function () {
//     console.log("hi I'm IIFE");
//   })();
// new (function () {
//   console.log("hi I'm IIFE");
// })();
// new (function () {
//   console.log("hi I'm IIFE");
// })();
