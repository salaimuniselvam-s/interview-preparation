import "./sms.scss";
const output = document.querySelector(".output");
function add(a, b) {
  console.log(a + b);
  output.innerHTML = a + b;
}

module.exports = { add };
