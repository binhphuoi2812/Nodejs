const TestObject = {

    name : "Admin" 
}

function TestFunction (name){

    this.name = name;
}       
TestFunction.prototype.Testname = "Admin";

a = Object.create(TestObject);
b = new TestFunction();
console.log(a.name);
console.log(b.Testname);