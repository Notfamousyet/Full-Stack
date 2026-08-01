let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log("sum of 1 to 5 is "+sum)

let sum1=0
let i=0;
while(i<=5){
    sum1+=i;
    i++;
}
console.log("sum of 1 to 5 is "+sum1)

let countdown=[];
let endtime=5;
let i1=0;
while(endtime>0){
    countdown[i1]=endtime;
    i1++;
    endtime--;
}
console.log(countdown);

// let teacollection=[];
// let stopping;
// do{
//     console.log("enter favorite tea type");
//     stopping=prompt(`Write stop to finish`);
//     if(stopping!=="stop"){
//     teacollection.push(stopping);
// }
// }
// while(stopping!=="stop"){
//     teacollection.push(stopping);
// }

let total=0;
let k=1;
do{
    total+=k;
    k++;
} while(k<=3);
console.log(total);

let multipliednumbers=[];
let multiples=[2,4,6];
for(let i=0;i<=2;i++){
    multipliednumbers[i]=multiples[i]*2;
}
console.log(multipliednumbers);

let citylist=[];
let citiees=["paris","new york","tokyo","london"];
for(let i=0;i<citiees.length;i++){
    citylist[i]=citiees[i];
}
console.log(citylist);

let teastall=["green tea","black tea","chai","herbal tea","oolong tea"];
let selectedtea=[]
for(let i=0;i<teastall.length;i++){
    if(teastall[i]!="chai"){
        selectedtea[i]=teastall[i];
    }
    else{
        break;
    }
}
console.log(selectedtea);

let countylist=["london","new york","paris","berlin"];
let visitedcities=[];
for(let i=0;i<countylist.length;i++){
    if(countylist[i]=="paris"){
        continue;
    }
    visitedcities.push(countylist[i]);
}
console.log(visitedcities);

let numbers=[1,2,3,4,5]
let smallnumbers=[]
for (const num of numbers) {
    if(num===4){
        break;
    }
    smallnumbers.push(num);
}
console.log(smallnumbers);

let newteastall=[]
for (const teas of teastall) {
    if(teas=="herbal tea"){
        continue;
    }
    newteastall.push(teas);
}
console.log(newteastall)

let citypopulation={
    "london":100000000,
    "new york":20000000,
    "paris":30000000,
    "berlin":4000000
};
let citypopulations={}
for (const city in citypopulation) {
    console.log(city);
}
for (const city in citypopulation) {
    if(city==="berlin"){
        continue;
    }
    citypopulations[city]=citypopulation[city];
}
console.log(citypopulations)

let teacollection=["earl grey","green tea","chai","oolong tea"];
let availableteas=[];
teacollection.forEach(function(tea){
    if(tea==='chai'){
        return;
    }
    availableteas.push(tea);
})
console.log(availableteas);

let tovisit=["berlin","tokyo","sydney","paris"];
let traveledcities=[]
tovisit.forEach(function(city) {
    if(city==="sydney"){
        return;
    }
    traveledcities.push(city);
});
console.log(traveledcities);

let teasection=["chai","green tea","black tea","jasmin tea","herbal tea","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"];
let shorttea=[];
for (const teas of teasection) {
    if(teas.length<=10){
        shorttea.push(teas);
    }
}
console.log(shorttea);

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaorder=makeTea("lemon tea");
console.log(teaorder);

function ordertea(teatype){
    function confirmorder(){
        return `order confirmed for ${teatype}`
    }
    return confirmorder();
}
let orderconfirmation =ordertea("chai");
console.log(orderconfirmation);

const calculateTotal=(price,quality)=>{
    return price * quality
}
let totalcost=calculateTotal(499,100);
console.log(totalcost);

function processteaorder(){
    
}