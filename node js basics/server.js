console.log("lets make a server");
const http = require("http");
console.log(http);
const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("<h1>Home Page is rendering</h1>");
    } else if (req.url === "/about") {
      res.end("<h1>About Page is rendering</h1>");
    } else if (req.url === "/contact") {
      res.end("<h1>Contact Page is rendering</h1>");
    } else {
      res.end("<h1>Something is rendering</h1>");
    }
  })
  .listen(4000, () => console.log("Server is working"));
