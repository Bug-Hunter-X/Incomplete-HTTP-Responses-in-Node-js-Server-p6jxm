const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, world!');
  res.end(); // Added res.end() to properly signal the end of the response
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});