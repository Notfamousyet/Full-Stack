let computer={
    cpu:40,
    screen:500
}
let lenovo={
    screen:"HD",
    __proto__:computer
}
console.log(`lenovo`,lenovo.__proto__)

let greatcar={tyre:4}
let tesla={driver:"ai"}
Object.setPrototypeOf(tesla,greatcar)
console.log(Object.getPrototypeOf(tesla))