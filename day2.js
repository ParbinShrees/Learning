const fruits = ["apple", "banana", "cherry", "date", "Mango"]
// console.log(fruits[0])
// console.log(fruits[2])
// console.log(fruits.length) //Array length
// console.log(fruits.toString()) //Array toString()
// console.log(fruits.at(2)) //JavaScript Array at()
// console.log(fruits[2]) //JavaScript Array at()

// //JavaScript Array join()
// console.log(fruits.join("-"))

// //pop()
// fruits.pop()
// console.log(fruits);

// //push()
// fruits.push("Cherry")
// console.log(fruits);

// //shift()
// fruits.shift()
// console.log(fruits)

// //unshift()
// fruits.unshift("Apple")
// console.log(fruits)

// //Array.isArray()
// console.log(Array.isArray(fruits))

// //delete
// delete fruits[1];

// console.log(fruits);
// console.log(fruits.length);

// //concat()

// const fruits1 = ["apple", "banana", "cherry"]
// const food = fruits.concat(fruits1)
// console.log(food)

//Array copywithin()
//fruits.copyWithin(2, 0)
//console.log(fruits)

//Array flat()
//const arr = [1,2, [4,5,6], [7,8,9]];
//console.log (arr.flat());

//Array flatMap()
const myArr = [1, 3, 4, 5, 6];

const newArr = myArr.flatMap((num) => [num * 2]);

console.log(newArr);


//Array Slice()
console.log(fruits.slice(1,3, "Lemon"))

//Array Splice()
console.log(fruits.splice(2,0, "Kiwi"))