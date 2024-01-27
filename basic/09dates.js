// date is an object in js
//let mydate=new Date()
// console.log(mydate.toISOString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// let mycreate=new Date(2024,0,27)
// console.log(mycreate);
// console.log(mycreate.toDateString());
// months starts from 0 in js

let dt=new Date(2024,0,27,5,5)
console.log(dt.toLocaleString());
let sdt=new Date("2024-01-27")
//when dd-mm-yyyymonths starts with 1
console.log(sdt.toLocaleString());

let mytime=Date.now()
console.log(mytime);
console.log((sdt.getTime()));
// we'll get time in milisecond and can use this to compare time 
//do comaparisons in milisecond
console.log(Math.floor(Date.now()/1000));//gives time  in seconds 
