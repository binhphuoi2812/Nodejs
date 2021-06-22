// var  Emitter = require("./emitter");


var Emitter = require("events");
var configEmitter = require("./config").events;
var emitter =new Emitter();

emitter.on(configEmitter.BAD_SCORE,function(){

    console.log("Catching bad grade!");
});

emitter.on(configEmitter.BAD_SCORE,function(){
    console.log("Send to parent");
})


var scores = [10,4];

scores.forEach(item =>{


    if (item < 5){
        
        console.log(item , " Bad grade");
        emitter.emit(configEmitter.BAD_SCORE);
    }
})