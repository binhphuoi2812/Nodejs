var app = angular.module("app.todos",[]);

app.controller("todoController",['$scope',function($scope){


    $scope.appName = "Node todos!!";


    $scope.formData = {};
    $scope.todos = [
        {
            text: "Create Project",
            isDone: true
        },
        {
            text: "set up AngularJS app",
            isDone: true
        },
        {
            text : "call api , binding data ,action",
            isDone: false
        },
        {
            text : "Deployment",
            isDone: false
        }
    ];

    $scope.createTodo = function(){

        var todo = {
            text : $scope.formData.text,
            isDone: false
        }
        $scope.todos.push(todo);
        $scope.formData.text = "";
    }
}])