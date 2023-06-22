const htmlQuestions = [
  {
    question: "what is Html ?",
    answer:
      " HTML stands for Hypertext Markup Language. It is the standard markup language used for creating web pages and applications on the World WideWeb. HTML uses a set of tags and attributes to structure the content and define the presentation of a web page.",
  },
  {
    question: "what are tags and attributes in Html ?",
    answer:
      " In HTML, both attributes and tags are used to define the structure, behavior, and presentation of elements on a web page. However, they serve different purposes: Tags are the fundamental building blocks of HTML markup. They define the beginning and end of an element and enclose the content within that element. Tags are represented by angle brackets (< and >). Examples of tags include <h1>, <p>, <div>, <a>, and <img>. Tags can have attributes associated with them to provide additional information or modify their behavior. Attributes provide additional information or instructions for an HTML element. They are used within the opening tag of an element. Attributes consist of a name-value pair, separated by an equals sign (=). The value is enclosed in quotation marks (\" or '). Examples of attributes include href, src, class, id, alt, and style. Attributes can modify the behavior, appearance, or functionality of an element. They can be used to specify things like the source of an image (src attribute), the target URL of a hyperlink (href attribute), the styling of an element (class or style attribute), and more.",
  },
  {
    question: "What are Block and Inline Elements",
    answer:
      "Block-level elements generate a block-level box on the web page.They typically start on a new line and occupy the full available width of their parent container. Examples of block-level elements include <div>, <p>, <h1> to <h6>, <ul>, <li>, <table>, and many others.             Inline elements do not generate a new line and flow within the text content of a block-level element or another inline element. They occupy only the necessary width to contain their content and do not cause a line break. Inline elements are often used to format and style text within a block-level element. Examples of inline elements include <span>, <a>, <strong>, <em>, <img>, <input>, and <br>, among others.",
  },
  {
    question: "What is head and title elements ?",
    answer:
      "The <head> element is a container for metadata and other non-visible elements that provide information about the HTML document. The content within the <head> element is not displayed on the web page itself, but it contains important information for browsers and search engines.  The <title> element is used to define the title of the HTML document.The text specified within the <title> element is displayed as the title of the web page in the browser's title bar or tab.",
  },
  {
    question: "How to import css and js in html ?",
    answer:
      " <link rel='stylesheet' href='styles.css'>  <script src='script.js'></script>",
  },
  {
    question: "what is heading in html ?",
    answer:
      "In HTML, headings are used to define the hierarchical structure and provide semantic meaning to the different sections of a web page. There are six levels of headings, ranging from <h1> to <h6>, where <h1> represents the highest level and <h6> represents the lowest level.",
  },
  {
    question: "What is the purpose of tables in HTML?",
    answer:
      "Tables in HTML are used to organize and present tabular data in a structured format. They allow for the display of data in rows and columns, making it easier to understand and analyze.",
  },
  {
    question: "What is an anchor tag in HTML?",
    answer:
      "The anchor tag, <a>, is an HTML element used to create a hyperlink. It allows users to navigate between different web pages or sections within the same page. <a href='mailto:example@example.com'>Send Email</a>  <a href='path/to/file.pdf' download>Download PDF</a>",
  },
  {
    question: "What is a form in HTML?",
    answer:
      "A form in HTML is a container that allows users to input and submit data to a server-side script for processing. It typically consists of input fields, checkboxes, radio buttons, dropdown lists, and buttons.",
  },
  {
    question: "What are events in JavaScript?",
    answer:
      "Events are actions or occurrences that happen in the browser, such as a user clicking a button, moving the mouse, or pressing a key. In JavaScript, events allow you to detect and respond to these actions.",
  },
  {
    question: "What is event delegation?",
    answer:
      "Event delegation is a technique where you attach a single event listener to a parent element instead of attaching individual event listeners to each child element. The event is then handled based on the target element that triggered the event. This approach is useful when you have dynamically added or removed elements within a parent container.",
  },
  {
    question: "What is the purpose of event bubbling and event capturing?",
    answer:
      "Event bubbling and event capturing are two different ways of handling events in the HTML DOM. Event bubbling is the default behavior where the event is first triggered on the innermost element and then propagates up through its ancestors. It allows events to be handled at different levels of the DOM hierarchy. Event capturing is the opposite behavior where the event is captured on the outermost element first and then propagates down to the target element. It allows you to intercept and handle events at the root level before they reach the target element.",
  },
  {
    question: "What is semantic HTML?",
    answer:
      "Semantic HTML refers to the use of HTML elements that carry meaning and describe the structure and purpose of the content they enclose. It provides a way to convey the meaning of the content to both the browser and developers, making the HTML code more readable, accessible, and search engine friendly.",
  },
  {
    question: "Why is semantic HTML important?",
    answer:
      "Semantic HTML is important for several reasons: Accessibility: Semantic elements provide additional context to assistive technologies, making the content more accessible to users with disabilities. SEO (Search Engine Optimization): Search engines rely on semantic structure to understand and rank web content effectively. Maintainability: Semantic HTML makes it easier for developers to understand and maintain the codebase, improving collaboration and future updates.Consistency and Readability: Semantic elements enhance code readability, making it easier for other developers to understand the structure and purpose of the content.",
  },
  {
    question: "What is Cookies in Html ? ",
    answer:
      "Cookies in HTML are small pieces of data that are stored on the client-side by a web browser. They are used to store information about the user or the website and are sent back and forth between the browser and the server with each request. Cookies are commonly used for various purposes, such as: Session Management, Personalization, Tracking and Analytics, Authentication and Authorization. 4kb per cookie and 4mb per domain.",
  },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
];

// Function to append the array of objects to index.html
function appendDataToHTML(data) {
  const container = document.getElementById("html-container");

  // Loop through the array
  htmlQuestions.forEach((item, index) => {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Set the text content of the h1 and p elements
    h1.textContent = index + 1 + ". " + item.question;
    p.textContent = item.answer;

    // Append the h1 and p elements to the container
    container.appendChild(h1);
    container.appendChild(p);
  });
}

// Call the function to append the data to the HTML
appendDataToHTML(htmlQuestions);

// rendering other html inside html
fetch("table.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("table").innerHTML = data;
  });
fetch("form.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("form").innerHTML = data;
  });

// Event Bubbling and Event Capturing
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const button = document.getElementById("myButton");

outer.addEventListener(
  "click",
  function () {
    console.log("Outer div clicked");
  },
  true
); // Event capturing

inner.addEventListener(
  "click",
  function () {
    console.log("Inner div clicked");
  },
  true
); // Event capturing

button.addEventListener("click", function () {
  console.log("Button clicked");
}); // Event bubbling (default)

// Event Delegation
const myList = document.getElementById("myList");

myList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});
