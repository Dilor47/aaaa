const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is a simple Node.js server!\n');
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
