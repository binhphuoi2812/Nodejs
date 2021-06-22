var express = require("express");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");

var connectDB = require("./Connection");
var app = new express();

connectDB();
var port = 8097;

var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController");


var Schema = mongoose.Schema;
var personSchema = new Schema({


    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    address: {
        type: String
    }
});

var Person = mongoose.model("Person", personSchema);

app.use("/assets", express.static(__dirname + "/public"));
app.use(cookieParser());
app.set("view engine", "ejs")
app.use("/", function (req, res, next) {
    console.log("Request: " + req.url);

    var thanh = Person({
        firstname: "Thanh",
        lastname: "Nguyen",
        address: "Hanoi"
    })

    thanh.save(function (err) {

        if (err) throw err;

        console.log("Thanh connected")
    })

    var hoa = Person({
        firstname: "Hoa",
        lastname: "Nguyen",
        address: "Hanoi"
    })

    hoa.save(function (err) {

        if (err) throw err;

        console.log("Hoa connected")
    })

    next();
})

app.get("/", function (req, res) {


    res.render("home");
})

apiController(app);
homeController(app);
app.listen(port, function () {
    console.log("Success Connected");
})