const http = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html>
            <head>
            <title>Node</title>
            </head>
            <body>
            <h1>Hello, Worlds!</h1>
            <h3>Node webpage</h3>
            </body>
                </html >`);
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html>
            <head>
            <title>About</title>
            </head>
            <body>
            <h1>About us page</h1>
            <h3>About us</h3>
            </body>
                </html >`);
      break;
    case "/test":
      try {
        fs.appendFileSync("message.txt", "data to append");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(`<html>
            <head>
            <title>Result</title>
            </head>
            <body>
            <h1>File creation successful</h1>
            </body>
                </html >`);
      } catch (err) {
        // Handle the error
        console.log(err);
      }
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html>
            <head>
            <title>Page Not Found</title>
            </head>
            <body>
            <h1>404 Page Not Found</h1>
            <h3>Page your are looking for is not available</h3>
            </body>
                </html >`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ happily`);
});
