console.log("dsfdf");
// Get the hamburger element
let hamburger = document.querySelector(".hamburger");

// Get the wrapper element
let wrapper = document.querySelector(".wrapper");

// Add a click event listener to the hamburger element
hamburger.addEventListener("click", function () {
  // Toggle the "collapse" class on the wrapper element
  wrapper.classList.toggle("collapse");
});
