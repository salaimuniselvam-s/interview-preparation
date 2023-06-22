// "use strict";
msg = "sms";
function foo() {
  let x = {
    s: msg,
  };
  console.log(x.s, "sdf");
  x = 10; // Throws an error (ReferenceError: x is not defined)
}

foo();
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Sudheer");
function sms() {
  var abc = "sdf";
  return function fn() {
    // console.log(abc, "sdf");
  };
}
sms()();

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, new Error("dsf"));
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 10, "two");
});

Promise.all([promise1, promise2])
  .then(function (value) {
    // console.log(value); // "two" // Both promises will resolve, but promise2 is faster
  })
  .catch((err) => console.log(err));
