function outer(){
    let count=4;
    return function(){
        count++;
        return count; 
    }
}
let incre=outer();
console.log(incre())