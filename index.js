const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<html>
            <head>
            <title>Home</title>
            </head>
            <body>
            <h1>Home page</h1>
            </body>
                </html >`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ happily`);
});
