const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
// app.set('views', __dirname);

// app.get('/', function(request, response) {
//   response.render('index');
// });

app.get('*', (req, res) => {
          res.sendFile('/index.html');
})