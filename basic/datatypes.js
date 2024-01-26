//primitive
// 7 types: String,Number,Boolean,null,undefined,Symbol,Bigint
 
const bignumber=124652123225n
const outsidetemp=null

let check=true
// reference(Non primitive)

//Array,objects,fcn

const heros=["donga","inspector steel","naagraaj"];
let myobj={
  name:"siddhu",
  college: "mnnit",
}

const myfcn=function(){
  console.log("Hello master");
}

console.log(typeof bignumber);
console.log(typeof outsidetemp);// object type

// stack (primitive), heap(non primitive)
// stack me copy , heap me reference milta hai original value ka

let oname="sid"
let myname="siddhu"

myname="siddharth"
console.log(oname);
console.log(myname);

