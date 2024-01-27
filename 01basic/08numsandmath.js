const num=100;
console.log(num);

const mynum=new Number(200)//will generate number type explicitily
// console.log(mynum);
// console.log(mynum.toString().length);
// console.log(mynum.toFixed(2));//two places after decimal
//take care when working with precision
const rupee = 100000;
//console.log(rupee.toLocaleString('en-IN'));


//////maths///

console.log(Math.floor(5.4));
console.log((Math.ceil(5.6)));
console.log((Math.max(1,5,5.6,5.8)));
const min=10;
const max=20

//printing random value in range in integer form 
// Math.random 0 -1 ke beech me value deta hai
console.log(Math.floor((Math.random()*(max-min+1))+min));
// floor se int ayega (max-min+1) for range, +1  kiya ki 0 nhi ho and + min se minimum min to ayega hi