
// Q1: Modify Array Inside forEach
// Given the array:Use forEach to multiply each element by 2. Does arr get modified? Why or why not?

let arr = [1, 2, 3, 4, 5];
arr.forEach((num,ind)=>{
    arr[ind]=2*num;
})
console.log(arr);
// Q2:const arr = [10, 20, 30, 40, 50, 60];
// Use filter to return only the elements at odd indices.
const arr2 = [10, 20, 30, 40, 50, 60];
const newArr=arr2.filter((num,ind)=> ind%2!==0)
console.log(newArr);
//alternative
const newArr2=[]
arr2.forEach((num,ind)=>{
  if(ind%2!==0) newArr2.push(num);
    
})
console.log(newArr2);
// Q3: Filtering on Objects
// Given an array of users:
// Use filter to return only users who are 18 or older.
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 16 }
];
newUsers=users.filter((user)=>user.age>18)
console.log(newUsers);
//by using forEach
newUsers2=[];
users.forEach((user)=>{
    if(user.age>18)newUsers2.push(user)
})
console.log(newUsers2);
// Q4: Filter Falsy Values
// Given an array:
// Use filter to remove all falsy values (false, 0, "", null, undefined, NaN).
const arr3 = [0, "hello", "", null, undefined, "world", false, 42];
const a=arr3.filter((item)=> !Boolean(item));
console.log(a);


// Q7: Mapping an Object to an Array
// Given an object:
// const student = { name: "John", age: 20, grade: "A" };
// Use map to convert this object into an array of key-value pairs:
// [["name", "John"], ["age", 20], ["grade", "A"]]
const student = { name: "John", age: 20, grade: "A" };
const modifiedPairs = Object.entries(student).map(([key, value]) => [`student_${key}`, value]);

console.log(modifiedPairs);
// Q8: Nested Mapping
// Given the array:
// const numbers = [[1, 2], [3, 4], [5, 6]];
// Use map to flatten it into [1, 2, 3, 4, 5, 6].
const numbers = [[1, 2], [3, 4], [5, 6]];
const flatten=numbers.map((item)=>item).flat()
console.log(flatten);





