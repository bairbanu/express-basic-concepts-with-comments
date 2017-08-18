/*
Steps for creating this simple server
1) npm init -y
2) npm install --save express body-parser
3) npm install --save-dev nodemon
*/


/* After installing 'express' using 'npm install express', we let this file know we'll use
    the express library */
const express = require('express');

// In the same fashion, we 'require' a middleware called body-parser. The second requires is for express router
const bodyParser = require('body-parser');
const router = require('./routes/routes');

// runs an instance of an express server
const server = express();
const PORT = 3000;

// ========== MIDDLEWARE ==========

// this middleware takes the body of a HTTP POST REQUEST and makes it accessible
// in the request object as request.body
server.use(bodyParser.json());

// ========== MODULAR ROUTES MIDDLEWARE using Express Router ==========

server.use('/routes', router);

// ========== SERVER ROUTES ==========

// this route handles a HTTP GET REQUEST and executes the callback functions
// passed to it
server.get('/', (request, response, next) => {
  // the second parameter is the callback function
  response.send('Hello there! What\'s up?');

  // next() hits the next route with the same path
  next();
});

// next() doesn't hit this because it is not a '/' route
server.get('/testpath', (request, response) => {
  console.log('This path doesn\'t get hit');
});

// this gets hit by the next()
server.get('/', (request, response) => {
  console.log('This route gets hit from the \'\\\' route with next()');

// a HTTP POST REQUEST with a JSON body is parsed and console logged below
server.post('/test', (request, response) => {
  console.log('this is the json data sent', request.body);
  response.send('check console');
})
  // can't set the header once the response has been sent
  // response.send('Hi there again!');
});

// ========== SERVER ONLINE ==========

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})
