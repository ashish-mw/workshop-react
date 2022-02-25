const movies = [
  { id: 100, name: "The Matrix", year: 1998 },
  { id: 101, name: "The Matrix Revolutions", year: 2003 },
];

const getHtml = () => {
  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Epic movies</title>
  </head>
  <body>
    <ul>
    ${movies.map((m) => `<li id="${m.id}">${m.name} - ${m.year}</li>`).join("")}
    </ul>
  </body>
  </html>
  `;

  return html;
};

const PORT = process.env.PORT || 1337;

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(getHtml());
});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${PORT}`);
});
