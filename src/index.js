console.log('step 1 fired!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

console.log('step 1 fired!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// views is directory for all template files
app.use(express.static(path.join(__dirname, 'src')))
// app.set('views', __dirname);
console.log('step 1 fired!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
})

console.log('step 1 fired!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// const server = http.createServer(app);
// server.listen(port, () => console.log('mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
module.exports = app;

console.log('step 1 fired!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// app.get('/', function(request, response) {
//   response.render('index');
// });

// app.get('*', (req, res) => {
//           res.sendFile('index.html');
// })