const http = require('http');

const server = http.createServer((req, res) => {
  // Without proper handling of the 'end' event,
  // the response might not be sent before the connection closes.
  // leading to incomplete or missing data on the client-side.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, world!');
  // Missing res.end() to signal the end of the response
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});