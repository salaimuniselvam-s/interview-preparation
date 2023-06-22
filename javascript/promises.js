const prom = new Promise((res, rej) => {
  setTimeout(() => {
    res("sms");
  }, [1500]);
});

// prom
//   .then((a) => {
//     return new Promise((res, rej) => {
//       console.log(1, a);
//       setTimeout(() => {
//         res("smsasdad");
//       }, [1500]);
//     });
//   })
//   .then((c) => console.log(c))
//   .catch((b) => console.log(b));

let isIn = {
  key: "sms",
};
// console.log("key" in isIn);

var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function (j) {
      return () => {
        console.log("The index of this number is: " + j);
      };
    })(i),
    3000
  );
}
