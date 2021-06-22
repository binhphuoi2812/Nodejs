function Person (){

    this.message = "Way 4";
    this.SayHello = function (){
        
        console.log(this.message)
    }

}


module.exports = Person;