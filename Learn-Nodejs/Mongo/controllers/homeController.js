var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

module.exports = function (app) {

    app.get("/user/:id", function (req, res) {

        // res.cookie("username", req.params.id)
        // res.send(req.params.id);
        res.render("user", {
            ID: req.params.id
        })
    })

    app.post("/login", urlencodedParser, function (req, res) {

        res.send("Welcome" + req.body.username);
        console.log("username", req.body.username);
        console.log("password", req.body.password);
    })
    app.post("/loginjson", jsonParser, function (req, res) {

        res.send("Welcome");
        console.log( req.body.firstName);
        console.log( req.body.lastName);
    })
}