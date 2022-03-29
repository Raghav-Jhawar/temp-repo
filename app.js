const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1> This is the home page of website </h1>");
  } else if (req.url === "/xxx") {
    // console.log(error);
    res.end("<p> this is the additional page in this website");
  } else {
    res.end(
      `<h1> Oops Page not found </h1> <br> <a href="/"> back to home page </a>`
    );
  }
});

server.listen(4000);
