function person(name,age){
    this.name=name;
    this.age=age;
}
function car(make,model){
    this.make=make;
    this.model=model;
}
let mycar=new car("toyota","camry");
let mynewcar=new car("tata","safari");
console.log(mycar);
console.log(mynewcar);

function animal(species){
    this.species=species;
}
animal.prototype.sound=function(){
    return `${this.species} make a sound`
}
let dog =new animal("Dog");
console.log(dog.sound())

// function drink(name){
//     if(!new.target){
//         throw new Error("drink must be called with new keyword")
//     }
//     this.name=name;
// }
// let chai=new drink("chai")
// let coffe=drink("coffe")

let abc={
    make: "toyota",
    model:"camery",
    year:2020,
    start:function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
console.log(abc.start());

function Person(name,age){
    this.name=name;
    this.age=age;
}
let john=new Person("john",10);

function Animal(type){
    this.type=type
} 
Animal.prototype.speak=function(){
    return `${this.type} makes a sound`;
};
Array.prototype.hitesh=function(){
    return ` custom method ${this}`;
}
let myarray=[1,2,3];
console.log(myarray.hitesh());
let myNewArray=[1,2,3,4,5,6,7,8,9,0];
console.log(myNewArray.hitesh());

class Vehi{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        return `${this.model} is a car from ${this.make} `
    }
}
class ca extends Vehi{
    drive(){
        return `${this.make}: this is an inheritance exmaple`
    }
}
let mycar1=new ca("tata","corrola");
console.log(mycar1.start());
console.log(mycar1.drive());

// Encapsulation
//  restrict things from getting direct access.

class BankAccount{
    #balance=0;
    deposite(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    getBalance(){
        return `${this.#balance}`;
    }
}
let account=new BankAccount();
console.log(account.getBalance());

// Abstraction
// the process of hiding complex, messy details to focus only on what is important

class cofeeMachine{
    start(){
        return `Starting the machine...`
    }
    brewCoffee(){
        return `Brewing coffee`;
    }
    pressStartButton(){
        let msg1=this.start();
        let msg2=this.brewCoffee();
        return `${msg1} + ${msg2}`
    }
}
let myMachine=new cofeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// Polymorphism 
// the ability for different objects to respond to the exact same method call in their own unique way

class Bird{
    fly(){
        return `Flying....`
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}
let bird=new Bird()
let penguin=new Penguin()
console.log(bird.fly())
console.log(penguin.fly())

// static method (only called by class) (some classes we don't want to use it by creating an object then static used)

class calculator{
    static add(a,b){
        return a+b
    }
}
console.log(calculator.add(1,2))

// getters and setters

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area (computed property)
  get area() {
    return this.width * this.height;
  }

  // Setter with validation logic
  set width(value) {
    if (value <= 0) throw new Error("Width must be positive.");
    this._width = value;
  }

  get width() {
    return this._width;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50
