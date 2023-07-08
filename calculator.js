// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var type = req.body.type;
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = 0;
  if (type == "add") {
    result = num1 + num2;
    res.send("the result is " + result);
  } else if (type == "sub") {
    result = num1 - num2;
    res.send("the result is " + result);
  } else if (type == "mul") {
    result = num1 * num2;
    res.send("the result is " + result);
  } else if (type == "div") {
    result = num1 / num2;
    res.send("the result is " + result);
  }
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);
  var bmiResult = weight / Math.pow(height, 2);
  res.send("Bmi Result is " + bmiResult);
});

app.listen(port, function () {
  console.log("Server started with " + port + " port");
});
