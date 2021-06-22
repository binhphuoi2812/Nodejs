function Person (){

    this.message = "Way 3";
    this.SayHello = function (){
        
        console.log(this.message)
    }

}


module.exports = new Person();