const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = process.env.PORT || 7070;

//* importing main routes
const main = require('./routers/main');
const courses = require('./routers/programs');
const camp = require('./routers/camp');
const admissionsConsulting = require('./routers/admissions-consulting');

app.set('view engine', 'ejs');
app.set('views', './src/views')
// app.use(function(req, res, next) {
//   if(!req.secure){
//     res.redirect('https://www.pointavenue.com/' + req.url);
//   } else {
//     next();
//   }
// });
app.use(express.json())
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/publish'));


// * main routes
app.use('/', main);
// * courses & courses' sub routes
app.use('/programs', courses);
// * camp
app.use('/camp', camp);
// * admissions-consulting
app.use('/admissions-consulting', admissionsConsulting);




app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
})