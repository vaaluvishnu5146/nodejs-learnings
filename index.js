const http = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const fileName = "message.txt";
  const folder = "logs";
  try {
    fs.appendFileSync(`./${folder}/${fileName}`, "data to append");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<html>
            <head>
            <title>Result</title>
            </head>
            <body>
            <h1>${fileName} creation inside ${folder} folder successful</h1>
            </body>
                </html >`);
  } catch (err) {
    // Handle the error
    console.log(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ happily`);
});
