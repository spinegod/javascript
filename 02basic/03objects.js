// singleton    constructor se banate hai to singleton bnta hai
//Object.create//constructor method aage baat krenge isme

//object literals 

//object ke andar keys, values ka scene hot hai
const mysym=Symbol("key1")//sumbol 
const jsuser={
    name: "sid",
    "full name":"siddharth singh",//ise . vale se nhi access kr skte hai
    [mysym]:"mykey1",//aise  bna skte symbol ko key
    location: "ftp",
    email: "ss6156852@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","saturday"]
}
//console.log(jsuser.name);//key bhi string ki trh bnti hai to jab .se acces krena hai to string nhi 
//console.log(jsuser["name"]);//jab[] access krna hai to string ki trh pass kro key ko
//console.log(jsuser[mysym]);//symbol ko [] aise hi access kiya ja skta hai
//Object.freeze(jsuser)//freezing the object(ab change nhi kr skte)

jsuser.greeting=function(){
    console.log("Hello User");
}
jsuser.greetingtwo=function(){
    console.log(`Hello User,${this.name}`);
}
//console.log(jsuser.greeting);//undefined
//console.log(jsuser.greeting);//fcn return back(fcn ka reference aya hai)
console.log((jsuser.greeting()));
console.log(jsuser.greetingtwo());
