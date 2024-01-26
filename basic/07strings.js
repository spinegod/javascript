const name ="Sidharth"
const rating=1555

console.log(name+ "|"+ " rating:"+rating);// not recommended

console.log(`Hello my name is ${name} and my Leetcode rating is ${rating}`);

const playername=new String("Siddharth")

console.log(playername[1]);
console.log(playername.length);
console.log(playername.toUpperCase());
//as string primitive hai to originalme change nhi hoga jab uppercase vala print krenge
console.log(playername.charAt(2));
console.log(playername.indexOf('d'));

const newplayer=playername.substring(0,4)// 0th se 4 len ki substring dega
console.log(newplayer);

const anothersub=playername.slice(-5,2)
console.log(anothersub);
const newname="  lord ji raiya "
console.log(newname.trim());//will trim spaces in start and end

// replacing a character using replace
const url="hello%20@lord.com"
console.log(url.replace('%20','-'));

//seacrching keywords using includes
console.log(url.includes('ram'));//false dega

//splitting string as i like
console.log(url.split('@'));// will split string in form of array using the defined separator split(seperator,limit)