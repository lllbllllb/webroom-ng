console.log('Medium mode: ')

const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.sendFile('index.html');
});

const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running! (step 3b fired)'))

//

// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/dist'));

// // views is directory for all template files
// app.set('views', __dirname + '/dist');

// app.get('*', function(request, response) {
//   response.render('index.html');
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });