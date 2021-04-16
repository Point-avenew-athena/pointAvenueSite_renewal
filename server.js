const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = process.env.PORT || 7070;

app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use(express.json())
app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about-us', (req, res) => {
  res.render('about-us')
})

app.get('/classes', (req, res) => {
  res.render('classes')
})

app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
})