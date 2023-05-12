// Problem 1: You are receiving values from an AXIOS request, said api returns 2 
// arrays with the following values [1,4,5,8,10,30] and ["January", "February", "March", "April", "May" ,"June"] 
// the goal is to build a JSON Array to be used in the front, The return output should be similar to 
// [ {"January":1, "February":4}..... ] Note: The function should only have one for loop.

 let numbers = [1,4,5,8,10,30]
let months = ["January", "February", "March", "April", "May" ,"June"]

function merge(name, num) {
    let arr = {};
    for (let i = 0; i < name.length; i++) {
        arr[name[i]] = num[i];
    }
    return arr;
}

let x = merge(months, numbers)
let result = JSON.stringify(x)

console.log(result) 

//-------------------------------------------------------------------------------
/* problem 2: Write a function that allows only the following options.
-The first letter must be capitalized
-must have at least 4 numbers
-must have some special character "(-@/*"
-key length must be at least 10 characters */

