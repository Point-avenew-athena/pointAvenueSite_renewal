const express = require("express");
const app = express();
const path = require("path");
// const favicon = require('serve-favicon');
//* PORT
const PORT = process.env.PORT || 7070;

//* importing main routes
const main = require("./routers/main");
const courses = require("./routers/programs");
const coursesVn = require("./routers/programsVn");
const campVn = require("./routers/campVn");
const camp = require("./routers/camp");
const admissionsConsulting = require("./routers/admissions-consulting");

// redirect HTTP to HTTPS
// app.all('*', (req, res, next) => {
//   // development not redirect
//   if (process.env.NODE_ENV == 'development') {
//     next();
//     return;
//   }

//   const protocol = req.protocol;
//   if (protocol == 'https') {
//     next();
//   } else {
//     res.redirect(301, `https://${req.hostname}${req.url}`);
//     return;
//   }
// });

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// * main routes
app.use("/", main);
// * courses & courses' sub routes
app.use("/programs", courses);
app.use("/vn/programs", coursesVn);
// * camp
app.use("/camp", camp);
app.use("/vn/camp", campVn);
// * admissions-consulting
app.use("/admissions-consulting", admissionsConsulting);

app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
});
