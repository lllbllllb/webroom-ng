const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.use(expect.static(path.join(__dirname, 'src')))
// app.set('views', __dirname);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
})

const server = http.createServer(app);
server.listen(port, () => console.log('mbllllb running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'))

// app.get('/', function(request, response) {
//   response.render('index');
// });

// app.get('*', (req, res) => {
//           res.sendFile('index.html');
// })