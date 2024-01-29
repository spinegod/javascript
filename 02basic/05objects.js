const course={
  coursename:"js",
  price:"999",
  teacher:"hitesh"
}

//to make code clean and when we want to print value or keys
// destructuring objects (also can destructre arrays we will learn it later)

//const {coursename}=course
const {coursename: cn}=course//name bhi de skte hai
console.log(cn);