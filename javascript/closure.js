// let globalVar = 12;
// (function outerFn(outerArg) {
//   let outerVar = 7;
//   (function innerFn(innerArg) {
//     console.log(outerArg + innerArg + outerVar + globalVar);
//   })(10);
// })(5);

// function mul(o) {
//   return function (i) {
//     return function (n) {
//       return n * i * o;
//     };
//   };
// }

const mul = (o) => (i) => (n) => n * i * o;

// console.log(mul(2)(3)(8));

let arra = [1, 2, 3, 4, 5];
arra.length = 0;
arra = [];
arra.splice(0, arra.length);

// console.log(arra);

const deleted = { a: 3 };
delete deleted.a;
// console.log(deleted);

let source = { sms: "sdf" };
const obj = Object.create(source);
// console.log(Object.hasOwnProperty.call(obj, "sms"));
delete obj.__proto__.sms;
// console.log(obj.sms);

var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
// undefined * 1 , <1 empty item>
// console.log(trees);

var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[2];
// console.log(trees, trees.length);

var bar = true;
// arithmetic operators on boolean acts as a integer 1 and 0
// console.log(bar + 0);
// console.log(5 / false);
// console.log(bar + "xyz");
// console.log(bar + true);
// console.log(bar + false);

var z = 1,
  y = (z = typeof y);
// console.log(y);

var foo = function bar() {
  return 12;
};
// console.log(typeof foo);

// console.log(compileTymFn());
function compileTymFn() {
  return 12;
}

// runTimeFn();
// // TypeError: runTimeFn is not a function
// var runTimeFn = function () {
//   return 12;
// };
