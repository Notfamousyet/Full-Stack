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