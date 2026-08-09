// Prototypal inheritance is a core JavaScript feature where objects directly inherit properties and methods from other objects
function Person(name){
    this.name=name;
}
Person.prototype.greet=function(){
    console.log(`Hello my name is ${this.name}`)
}
let hitesh=new Person("Hitesh");
hitesh.greet();