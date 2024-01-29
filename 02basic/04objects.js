// declaring empty objects
// const tinderuser = new Object()
// const tinderuser={}

// objects inside objects

const newuser={
  emal:"new@gmail.com",
  fullname: {
    userfullname:{
      firstname:"siddhu",
      lastname:"parihar"
    }
  }
}
//console.log(newuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2};
// console.log(obj3);//object ke andar object aa ajyega

//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}//best way 
console.log(obj3);

