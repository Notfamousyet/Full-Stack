/*
8 data types

String
Number
Boolean
Bigint

Undefined
null

Object
Symbol

*/

let score=10;
let name="pimpli"
let islogined=false;

//object
let teaType=["lemon tea","green tea","matcha"];
let user={firstname:"nina",lastname:"hombre"};

let balance=120;
let anotherbalance=new Number(120);
console.log(balance);
console.log(anotherbalance);
console.log(anotherbalance.valueOf());
console.log(typeof balance);
console.log(typeof anotherbalance);

// null and undefined

let firstname;
console.log(firstname);
let lastname=null;
console.log(lastname);

// String
let myString="Hello";
let myStringOne='Hola';
let oldGreet=myString+" "+"Shreya";
let greetMessage=`Hello ${name}`;
console.log(myString);
console.log(myStringOne);
console.log(oldGreet);
console.log(greetMessage);

// Symbol
 let sm1=Symbol("abc");
 let sm2=Symbol();
console.log(sm1);
console.log(sm2);
console.log()

let username1={firstname1:"shreya",islogined1:true};
console.log(username1);
console.log(typeof username1);
username1.firstname2="praniti";
username1.lastname="chopra";
console.log(username1);

let scoree=44;
if(typeof scoree ==='number'){
    console.log("it is a number")
}
// Array
let heros=["a","b","c"];
let items=[];
console.log(items.length);

// qna
let teaFlavor=["green tea","black tea","oolong tea"];
let firstTea=teaFlavor[0];
console.log(firstTea);

let cities=["london","tokyo","paris","new york"];
let favoriteCity=cities[2];
console.log(favoriteCity);

let teaTypes=["herbal tea","white tea","masala chai"];
teaTypes[1]="jasmin tea";
console.log(teaTypes);

let citivisited=["mumbai","sydney"];
citivisited.push("berlin");
console.log(citivisited);

let teaorders=["chai","iced tea","matcha","earl grey"];
let lastorder=teaorders.pop();
console.log(lastorder);

let popularTeas=["green tea","oolong tea","chai"];
let softcopytea=popularTeas;
console.log(softcopytea);

let topcities=["berlin","singapore","new york"];
let harcopycities=[...topcities];
console.log(harcopycities);

let europeancities=["paris","rome"]
let asiancities=["tokyo","bangkok"]
let worldcities=europeancities.concat(asiancities);
console.log(worldcities);

let teamenu=["chai","iced tea","matcha","earl grey"];
let menulength=teamenu.length;
console.log(menulength);

let citybucketlist=["kyoto","london","cape town","vancoouver"];
let islondoninlist=citybucketlist.includes("london");
console.log(islondoninlist)