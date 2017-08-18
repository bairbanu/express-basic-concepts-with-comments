const express = require('express');

// create an instance of an express router
const router = express.Router();

// ========== ROUTER MIDDLEWARE ==========

// this is router middleware
// all routes going to this router will go through this middleware
// which will log the time on the console
router.use( timeOff = (request, response, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (request, response) => {
  response.send('This is the router: Hello!');
})

// To show that above middleware intercepts all routes to this router and stamps the time on the console
router.get('/timelog', (request, response) => {
  response.send('Check console for a time log');
})

// route with URL parameters or URL variables example
// test route with http://localhost:3000/routes/testparams/variablehere
router.get('/testparams/:test', (request, response) => {
  // 'test' will be the in the request.params object.
  console.log('This is the URL params:', request.params);
  response.send('check your console.');
})

// route with URL query example
// test route with http://localhost:3000/routes/testquery?name=Joh
router.get('/testquery',(request, response) => {
  console.log('This is the URL query:', request.query);
  response.send('check your console for query object')
})

module.exports = router;
