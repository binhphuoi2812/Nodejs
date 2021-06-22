function Person (){
    this.name = "Binh";
}

const Human = {

    name : "binh"

}

const person = new Person();

const human = Object.create(Human); 
const human2 = Object.create(Human); 

human2.name = "sy";
console.log(person.name);
console.log(human.name);
console.log(human2.name);