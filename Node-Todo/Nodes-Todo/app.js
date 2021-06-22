var express = require("express");

var bodyParser = require("body-parser");

var morgan = require("morgan");
var mongoose = require("mongoose");

var connectDB = require("./Connection");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");
var app = express();
connectDB();

var port = process.env.PORT || 3003;

app.use("/assets",express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(morgan("dev"));


app.set("view engine","ejs");


setupController(app);
todoController(app);
app.get("/",function(req,res){
    res.render("index");
});

app.listen(port,function(){
    console.log("App listening on port :" + port);
})