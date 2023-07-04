const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome to Node.js!");
    res.end();
  })
  .listen(3001);

console.log(__filename, __dirname, "df");
