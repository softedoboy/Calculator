
const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);

 var result = num1 + num2;

  res.send("Answer is " + result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

 var n1 = parseFloat(req.body.n1);
 var n2 = parseFloat(Math.pow(req.body.n2, 2));

 var result = Math.round(n1 / n2);

  res.send("Your Bmi is " + result);
});


app.listen(3000, function(){
  console.log("server is running on port 3000");
});
