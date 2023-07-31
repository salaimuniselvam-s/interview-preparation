"use strict";
// shallow vs deep copy

// primitives
// let a = {
//   name: "sms",
//   age: {
//     value: 25,
//   },
// };
// let b = JSON.parse(JSON.stringify(a));
// b.name = "sss";
// b.age.value = 40;

// primitives are copied by value
// objects are copied by reference
// spread does not work on nested elements
// json.parse & json.stringify are used to deep copy objects

// console.log(a, b, b === a);

// promise

// const timer = (time) =>
//   new Promise((resolve) => setTimeout(() => resolve(time), time));

// async function smss() {
//   const s7 = await timer(5000);
//   console.log("sms", s7);
// }

// smss();

fn();
// console.log(fn1);
function fn() {}
const fn1 = () => {
  console.log("fn1");
  return "fn1";
};

fn1 = "sms";
// fn1();
