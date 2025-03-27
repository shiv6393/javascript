// Any datatype to Number
let score ="33"
console.log(typeof score)
console.log(typeof (score))
 let typedScore=Number(score)
console.log(typeof typedScore)
console.log(typeof (typedScore))
let score2="33abc"
let typedScore2=Number(score2)
console.log(typeof typedScore2)
console.log(typeof (typedScore2))
console.log(typedScore2)//will show NaN
let isLoggedIn = true//will show 1, for false will show 0;
typedisLoggedIn=Number(isLoggedIn)
console.log(typeof typedisLoggedIn )
console.log( typedisLoggedIn )
let x=null
let newx=Number(x)
console.log(typeof newx);//number

console.log(newx);//will show 0
let y=undefined// data type is unefine
let newy=Number(y)
console.log(typeof newy);

console.log(newy);//show NaN

// Any Datatype to Boolean
let num=0
let num1=Boolean(num) // if num =0=> num1=false otherwise for every case it would be true
console.log(typeof num1)
console.log(num1)
let name="shivam"
let s=""
let typedS=Boolean(s)
let typedName=Boolean(name)
console.log(typedName)
console.log(typedS);











