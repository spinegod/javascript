const m_hero=["donga","naagraaj","steel"]
const h_hero=["ironman",'thor']

//m_hero.push(h_hero)//array ke andar array aa jayegi [,,,[,,]] like this

//console.log(m_hero);
//const all_hero=m_hero.concat(h_hero)//gives new array combining both array
//console.log(all_hero);

const all_hero=[...m_hero,...h_hero]//preferred way for concating
//console.log(all_hero);
const ano_array=[1,2,3,[3,4,5,[6,7]]]
const real_array= ano_array.flat(Infinity)//will give an array by combining all the arays within the input array
//console.log(real_array)

//console.log(Array.isArray("sid"));//returns false
//console.log(Array.from("SID"));//converts string to array

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));