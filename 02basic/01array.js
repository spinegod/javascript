//Array
//Array are resizeble
// can be of mixed datatype
//indexing from 0
// copy operation krne me shallow copy hoti hai (same refrence) i.e change made will reflect in original 
const myarr = [0,1,2,3]

//array methods

// myarr.push(6)
// console.log((myarr));
// myarr.pop()//remove last value
// console.log(myarr);

//myarr.unshift(9)//push at start thus time consuming operation
//myarr.shift()//remove first
// console.log(myarr.includes(9));//return true/false
// console.log(myarr.indexOf(8)); //return -1 if element not present
// const newarr=myarr.join()//convert arr

console.log(myarr);
const m1=myarr.slice(1,3)//index 0 se 3(excluded) value aayengi 
console.log(m1);
console.log(myarr);
const m2=myarr.splice(1,3)//index 0 se 3(included) value ayengi m2 me aur original array me se hat jayengi wo values
console.log(m2);
console.log(myarr);