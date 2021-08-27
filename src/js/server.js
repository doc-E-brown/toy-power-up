const compression = require('compression');
const cors = require('cors');
const express = require('express');
const rp = require('request-promise');

Promise = require('bluebird');

const app = express();

// compress our client side content before sending it over the wire
app.use(compression());

// your manifest must have appropriate CORS headers, you could also use '*'
app.use(cors({ origin: '*' }));

// http://expressjs.com/en/starter/static-files.html
app.get('/search', function (request, response) {
  console.log("touch");
  console.log(request.query['q']);
})

// listen for requests :)
const listener = app.listen(8080, () => {
  console.log('Card Snooze Server up and running 🏃');
});