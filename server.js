const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
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
const admissionsConsultingVn = require("./routers/admissions-consulting-vn");

const blog = require("./routers/blog");
const blogVn = require("./routers/blog-vn");

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

app.use("/vn/admissions-consulting", admissionsConsultingVn);

//blog

app.use("/blog", blog);
app.use("/vn/blog", blogVn);

app.use("/health-check", (req, res) => {
  res.send("success");
});

app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
});

// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

AWS.config.update({
  // Only to send mail, access key
  accessKeyId: "AKIAVLKBHBFXGJO2IBOP",
  secretAccessKey: "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",
  region: "ap-southeast-1",
});

app.post("/camp/summer-boarding-camp", function (req, res) {
  if (req.body.email) {
    var params = {
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          "contact@pointavenue.com",
          // req.body.email,
          /* more items */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: `
            <p><b>First Name: </b> ${req.body.firstName}</p>
            <p><b>Last Name: </b> ${req.body.lastName}</p>
            <p><b>Email: </b> ${req.body.email}</p>
            <p><b>Child Name: </b> ${req.body.childName}</p>
            <p><b>Phone Number: </b> ${req.body.phoneNumber}</p>
            <p><b>Student's Grade & School: </b> ${req.body.grade}</p>
          `,
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Register Summer Boarding Camp",
        },
      },
      Source: "contact@pointavenue.com" /* required */,
      ReplyToAddresses: [
        /* more items */
      ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    sendPromise
      .then(function (data) {
        res.status(204).send();
      })
      .catch(function (err) {
        res.send(err);
      });
  }
});

app.post("/camp/summer-day-camp", function (req, res) {
  if (req.body.email) {
    var params = {
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          "contact@pointavenue.com",
          // "trung.le@truenorth.edu.vn"
          // req.body.email,
          /* more items */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: `
            <p><b>First Name: </b> ${req.body.firstName}</p>
            <p><b>Last Name: </b> ${req.body.lastName}</p>
            <p><b>Email: </b> ${req.body.email}</p>
            <p><b>Child Name: </b> ${req.body.childName}</p>
            <p><b>Phone Number: </b> ${req.body.phoneNumber}</p>
            <p><b>Student's Grade & School: </b> ${req.body.grade}</p>
          `,
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Register Summer Day Camp",
        },
      },
      Source: "contact@pointavenue.com" /* required */,
      ReplyToAddresses: [
        /* more items */
      ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    sendPromise
      .then(function (data) {
        res.status(204).send();
      })
      .catch(function (err) {
        res.send(err);
      });
  }
});

app.post("/camp/winter-boarding-camp", function (req, res) {
  if (req.body.email) {
    var params = {
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          "contact@pointavenue.com",
          // "trung.le@truenorth.edu.vn"
          // req.body.email,
          /* more items */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: `
            <p><b>First Name: </b> ${req.body.firstName}</p>
            <p><b>Last Name: </b> ${req.body.lastName}</p>
            <p><b>Email: </b> ${req.body.email}</p>
            <p><b>Child Name: </b> ${req.body.childName}</p>
            <p><b>Phone Number: </b> ${req.body.phoneNumber}</p>
            <p><b>Student's Grade & School: </b> ${req.body.grade}</p>
          `,
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Register Winter Boarding Camp",
        },
      },
      Source: "contact@pointavenue.com" /* required */,
      ReplyToAddresses: [
        /* more items */
      ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    sendPromise
      .then(function (data) {
        res.status(204).send();
      })
      .catch(function (err) {
        res.send(err);
      });
  }
});

app.post("/camp/grit-camp", function (req, res) {
  if (req.body.email) {
    var params = {
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          "contact@pointavenue.com",
          // "trung.le@truenorth.edu.vn"
          // req.body.email,
          /* more items */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: `
            <p><b>First Name: </b> ${req.body.firstName}</p>
            <p><b>Last Name: </b> ${req.body.lastName}</p>
            <p><b>Email: </b> ${req.body.email}</p>
            <p><b>Child Name: </b> ${req.body.childName}</p>
            <p><b>Phone Number: </b> ${req.body.phoneNumber}</p>
            <p><b>Student's Grade & School: </b> ${req.body.grade}</p>
          `,
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Register Grit Camp",
        },
      },
      Source: "contact@pointavenue.com" /* required */,
      ReplyToAddresses: [
        /* more items */
      ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    sendPromise
      .then(function (data) {
        res.status(204).send();
      })
      .catch(function (err) {
        res.send(err);
      });
  }
});
