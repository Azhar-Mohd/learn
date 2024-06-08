const express = require("express");
// const cookieParser = require("cookie-parser");
// const cookieValidator = require("./cookieValidator ");
const app = express();

const requestTime = function (req, res, next) {
  req.requestTime = new Date();
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<strong>Requested at: ${req.requestTime}</strong>`;
  res.send(responseText);
});

// async function validateCookies(req, res, next) {
//   await cookieValidator(req.cookies);
//   next();
// }

// app.use(cookieParser());

// app.use(validateCookies);

// // error handler
// app.use((err, req, res, next) => {
//   res.status(400).send(err.message);
// });

const port = 1000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
