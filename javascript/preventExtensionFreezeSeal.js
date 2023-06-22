"use strict";

var employee = {
  name: "Nishant",
};

//Freeze the object
Object.freeze(employee);

// Seal the object
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true
console.log(Object.isFrozen(employee)); // true

// employee.name = "xyz"; // fails silently unless in strict mode
// employee.age = 30; // fails silently unless in strict mode
// delete employee.name;
