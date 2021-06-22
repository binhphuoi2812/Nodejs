//  const sayHello =require("./feature");


//  sayHello();
// console.log("Hello");

// require("./feature")

// var greet = require("./greet");

// greet.xinChao();
// greet.hello();
var hello1 = require("./hello1");

hello1();

var hello2 = require("./hello2").sayHello;

hello2();


var hello3 = require("./hello3");

hello3.SayHello();

hello3.message = " another Way 3 ";

hello3.SayHello();

var hello32 = require("./hello3");

hello32.message = " another Way 32 ";

hello3.SayHello();



var hello4 = require("./hello4");

var Hello4 = new hello4();

Hello4.SayHello();


var AnotherHello4 = new hello4();

AnotherHello4.message = "Another Way 4";

Hello4.SayHello();
AnotherHello4.SayHello();

var hello5 = require("./hello5");

hello5();



