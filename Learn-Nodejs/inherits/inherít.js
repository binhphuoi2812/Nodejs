const Emmiter = require("events");

const util = require("util");


function Dialog(){

    this.message = "Hello World ";
}

util.inherits(Dialog,Emmiter);

Dialog.prototype.SyaHello  = function (){
    console.log(this.message);

    this.emit("hello");
}

var dialog = new Dialog();

dialog.on("hello",function (){

    console.log("New Hello ");
})

dialog.SyaHello();