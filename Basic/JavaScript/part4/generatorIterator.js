// in it each at a time get executed and it remember every time where it left.

function* numGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen=numGenerator();
let gentwo=numGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gentwo.next().value)
console.log(gentwo.next().value)