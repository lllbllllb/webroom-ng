console.log('1) mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

console.log('2) mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// views is directory for all template files
app.use(express.static(path.join(__dirname, 'src')))
// app.set('views', __dirname);
console.log('3) mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
})

console.log('4) mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// const server = http.createServer(app);
// server.listen(port, () => console.log('mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
module.exports = app;

console.log('5) mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// app.get('/', function(request, response) {
//   response.render('index');
// });

// app.get('*', (req, res) => {
//           res.sendFile('index.html');
// })