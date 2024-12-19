// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //adds 6 to the end
// myArr.push(7) 
// myArr.pop()   //removes from the end

// myArr.unshift(9)  //adds 9 to the start
// myArr.shift()     //removes from the start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //converts the array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) 

console.log(myn1); // [1,2]
console.log("B ", myArr); 

// splice last value ko bhi consider krta hai
const myn2 = myArr.splice(1, 3)  
console.log(myn2);    //[1,2,3]
console.log("C ", myArr);  //modifies the original array : [0,4,5]