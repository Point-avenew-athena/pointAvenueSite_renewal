const express = require('express');
const app = express();
const PORT = process.env.PORT || 7070;
app.use(express.json())
app.use(express.static(__dirname + '/publish'));

app.get('/introduction', (req, res) => {
  res.sendFile(__dirname + '/publish/introduction.html')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/publish/index.html')
})

app.get('/about-us', (req, res) => {
  res.sendFile(__dirname + '/publish/about-us.html')
})

app.get('/classes', (req, res) => {
  res.sendFile(__dirname + '/publish/classes.html')
})

app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
})