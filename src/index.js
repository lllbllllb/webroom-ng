console.log('Medium mode: ')

const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static(path.join(__dirname, 'index.html')))

console.log('step 1 fired!');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

console.log('step 2 fired!');

app.set('port', (process.env.PORT || 5000));

console.log('step 3 fired!')

const server = http.createServer(app);
server.listen(port, () => console.log('Running! (step 3b fired)'))
// module.exports = app;

console.log('step 4 fired!')