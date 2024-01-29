function say(){
  console.log("s");
  console.log("i");
  console.log("d");
}
// say //fcn ka refrence
// say()//fcn ka execution

// function addtwo(number1,number2){
//    console.log(number1+number2);
// }
function addtwo(number1,number2){
  // let res=number1+number2;
  // console.log(res);
  // return res
  return number1+number2
}
const result=addtwo(4,6)//passing arguments in fcn
//console.log(result);
function loginusername(username){
  if(!username){
    console.log("please enter username");
  //   return;
  }
  return `${username} just logged in`
}
console.log(loginusername());
//console.log(loginusername("siddhu"));