var http = require("http");
var fs = require("fs");


http.createServer(function (req, res) {

    if (req.url === "/" || req.url === "/index.html") {
        // res.writeHead(200, {

        //     "Content-Type" : "text/html"
        // })

        // var html  = fs.readFileSync(__dirname + "/index.html" , "utf-8");


        // var user = "Boy";
        // html = html.replace("{user}",user);
        // res.end(html);

        fs.createReadStream(__dirname + "/index.html").pipe(res);

    } else if (req.url === "/json") {

         res.writeHead(200, {

            "Content-Type" : "application/json"
        })


        var person = {
            name: "Thanh",
            age: 21
        }


        res.end(JSON.stringify(person));
    } else {
        res.writeHead(404);
        res.end("Not found")
    }

}).listen(8092, "127.0.0.1",function(){
    console.log("ok");
});