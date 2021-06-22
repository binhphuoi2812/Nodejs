var Todos = require("../models/todoModels");


module.exports = function (app) {

    app.get("/api/setupTodos", function (req, res) {


        var seedTodos = [

            {

                text: "Learn Node.js",
                isDone: false
            },
            {

                text: "Learn Angular.js",
                isDone: false
            },
            {
                text: "Write some application",
                isDone: false
            }
        ];

        Todos.create(seedTodos,function(err,result){

            res.send(result);
        })
    });

    


}