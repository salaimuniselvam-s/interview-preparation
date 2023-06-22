// singleton pattern restricts the instantiation of class to only one time. if we want to instantiate again and again it will create one instance and use it for all the instantiations.

class normalPattern {
  constructor() {
    this.pattern = "normal";
  }
}

const singleton = (function () {
  let isInstantiated = false;
  // class singletonPattern {
  //   constructor() {
  //     this.pattern = "singletonPattern";
  //   }
  // }
  return {
    getInstance: () => {
      if (!isInstantiated) {
        isInstantiated = new normalPattern();
        return isInstantiated;
      }
      return isInstantiated;
    },
  };
})();

const n1 = new normalPattern();
const n2 = new normalPattern();
n1.pattern = "changedsds";
console.log(n1 == n2, n1.pattern, n2.pattern);

const s1 = singleton.getInstance();
const s2 = singleton.getInstance();
s1.pattern = "changsed";
console.log(s1 == s2, s1.pattern, s2.pattern);

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
function Clone(obj) {
  let clone = {};
  for (let key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}

let o1 = { sms: { a: "sf" } };
const d1 = deepClone(o1);
const d2 = Object.assign({}, o1);
console.log(d1, o1 === d1, o1 == d1, o1 === d2, o1 == d2);
