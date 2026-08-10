// bind

const person={
    name:"Hitesh",
    greet(){
        console.log(`Hi my name is ${this.name}`);
    },
};
person.greet();
const greetFunction=person.greet;
greetFunction();
const boundGreet=person.greet.bind({name:"John"});
boundGreet();

// call

const user={firstname:"Shreya"};
function greeting(greets,punctuation){
    console.log(`${greets}, ${this.firstname}${punctuation}`);
}
greeting.call(user,"Hello","!");


// apply 

function greeting1(greets,punctuation){
    console.log(`${greets}, ${this.firstname}${punctuation}`);
}
greeting1.apply(user,["Welcome","."]);