# Incomplete HTTP Responses in Node.js Server

This repository demonstrates a common error in Node.js HTTP servers: omitting the `res.end()` method.  This can result in incomplete or missing data sent to clients, leading to unexpected behavior and errors in applications consuming the server's API.

## Bug
The `bug.js` file showcases the problematic code. The server successfully starts, but responses are often cut short because the `res.end()` call is missing, preventing the client from receiving the complete response.