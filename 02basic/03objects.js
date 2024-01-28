// singleton    constructor se banate hai to singleton bnta hai
//Object.create//constructor method aage baat krenge isme

//object literals 

//object ke andar keys, values ka scene hot hai
const jsuser={
    name: "sid",
    "full name":"siddharth singh",//ise . vale se nhi access kr skte hai
    location: "ftp",
    email: "ss6156852@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","saturday"]
}
console.log(jsuser.name);//key bhi string ki trh bnti hai to jab .se acces krena hai to string nhi 
console.log(jsuser["name"]);//jab[] access krna hai to string ki trh pass kro key ko