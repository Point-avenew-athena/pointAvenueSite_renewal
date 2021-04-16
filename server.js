const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = process.env.PORT || 7070;

//* importing main routes
const main = require('./routers/main');
const courses = require('./routers/courses');

app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use(express.json())
app.use(express.static(__dirname + '/src'));


// * main routes
app.use('/', main);
// * courses & courses' sub routes
app.use('/courses', courses);



app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
})