const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 20ddd0; // Set status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is a simpdddle Node.js servddder!\n');
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {dd
ddd