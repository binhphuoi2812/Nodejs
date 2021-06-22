var express = require("express");
var cookieParser = require("cookie-parser");
var mysql = require("mysql2");

// var bodyParser = require("body-parser");
var app = new express();
var port = 8093;

var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController");


app.use("/assets", express.static(__dirname + "/public"));
app.use(cookieParser());
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set("view engine", "ejs")
app.use("/", function (req, res, next) {
    console.log("Request: " + req.url);


    req.requestTime = new Date();



    var connection = mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password : '',
        database: 'person',
        port : 3307
    })

    connection.connect();

    connection.query("SELECT * FROM employee",function(err, rows){ 

        if(err){
            throw err;
        }
        console.log(rows[0].name);
        console.log("ok");
    });

    connection.end();


    next();
})

app.get("/", function (req, res) {

    // console.log("Cookies :" , req.cookies)
    // res.send(`

    // <link href="/assets/style.css" rel = "stylesheet" type="text/css">
    // <h1>Hello Dude</h1>
    // <p>Request Time : ${req.requestTime}</p>


    // `);
    res.render("home");
})
// app.get("/api", function (req, res) {
//     res.json({
//         name: "Binh",
//         age: 21
//     })
// })

// app.get("/user/:id", function (req, res) {

//     // res.cookie("username", req.params.id)
//     // res.send(req.params.id);
//     res.render("user",{ID : req.params.id})
// })

// app.post("/login",urlencodedParser,function(req,res){

//     res.send("Welcome" + req.body.username);
//     console.log("username",req.body.username);
//     console.log("password",req.body.password);
// })



apiController(app);
homeController(app);
app.listen(port, function () {
    console.log("Success Connected");
})