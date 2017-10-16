// console.log('Medium mode: ')

// const express = require('express');
// const path = require('path');
// const http = require('http');

// const app = express();

// app.use(express.static(path.join(__dirname, 'dist')))

// console.log('step 1 fired!');

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// })

// console.log('step 2 fired!');

// const port = process.env.PORT || '5000';
// app.set('port', port);

// console.log('step 3 fired!')

// const server = http.createServer(app);
// server.listen(port, () => console.log('Running! (step 3b fired)'))

// console.log('step 4 fired!')

//

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
app.set('views', __dirname + '/dist');

app.get('*', function(request, response) {
  response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});