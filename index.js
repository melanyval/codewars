///////////////////////////////////////////////////////////////////////
//
// Problem 1
//
// Reverse this string so it says Tacos backwards: "socaT"

let word = "Tacos"

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString(word);

// QUESTION 2:

// write a function that reverses the word order of a sentence

// example: "cuban sandwiches" would become "sandwiches cuban"

let delicious = "cuban sandwiches"


let truth = "you look like the nerd emoji 🤓"

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

reverseSentence(truth);

//
// Question 3://

// Given a menu of delicious food, write a function that takes 2 arguments:

// 1. The number of food items you will order. `num`

// 2. The menu of food items that it will select from. `menu`

// Your function should return an array of random food items from the `menu` of length `num`

let tasty = [
  'burger',
  'pizza',
  'overpriced salad',
  'not cucumbers',
  'candy that is 99% sugar',
  'tequenos',
  'the top part of a muffin',
  'any kind of meat on any kind of rice',
  'all cuban food tbh'
]

function randomFood(num, menu) {
  let finalArr = []
  for (let i = 0; i <= num; i++) {
    let randomFood = menu[Math.floor(Math.random() * menu.length)]
    finalArr.push(randomFood);
  }
  return finalArr
}

randomFood(5, tasty)


// Question 4: Create a function that takes a sentence as an argument, and returns the same sentence with the first letter of each word capitalized

// Example: "hello world" would become "Hello World"

let title = 'mindful mel'

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {

    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
}

titleCase(title)

// Question 5

// Given an array of numbers and strings, return a new array that contains only the numbers, sorted in ascending order. 

// Question 5

// Given an array of numbers and strings, return a new array that contains only the numbers, sorted in ascending order. 

let mixed = [23, -2, 'pie', 60, 420, 'alligator', 'empanadas']

function ascending(arr) {

  let newMixed = arr.filter(item =>
    typeof item == 'number'
  )


  newMixed.sort(function (a, b) { return a - b });


  console.log(newMixed);

}

ascending(mixed)

//
// Question 6
//
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  var sum = 0
  var string = Math.abs(number).toString();

  for (i = 0; i < string.length; i++) {
    sum = sum + parseInt(string.substring(i, i + 1));
  }
  return sum;
}

sumDigits(10);
sumDigits(99);
sumDigits(-32);

//////////////////////////////////////////////////////////////////////////////

// Question 7
// Task:
// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

function oddOrEven(array) {

  if (array.length == 0) {
    return ("even")
  }

  let total = array.reduce((a, b) => {
    return a + b;
  })
  console.log(total)

  if (total % 2 == 0) {
    return ("even")
  }
  else {
    return ("odd")
  }
}
//////////////////////////////////////////////////////////////////////////////

// Question 8
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

// function sum(){
// 	var sum = 0;
// 	return function addition(num){
// 		return sum += num;
// 	}
// }
// var add = sum();
// add(2)
// add(3);

// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3

function add(n) {
  var fn = function (x) {
    return add(n + x);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}

add(1);
/////////////////////////////////////////////////////////////////////////////
// Question 9

// Description:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(str) {
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}

/////////////////////////////////////////////////////////////////////////////

// Question 10

//
// https://hackmd.io/@nkU2rmFFRf29v1MdrgTbpw/r1NkU7org?type=view

// blahblah blah asjdlakjdla :D

// console.log(1 % 3 == 0)
// console.log(2 % 3 == 0)
// console.log(3 % 3 == 0)

for (let i = 1; i <= 75; i++){
  if (i % 3 == 0 && i % 5 == 0){
  console.log("FizzBuzz")
  }
  else if (i % 3 == 0){
    console.log("Fizz")
  }
  else if (i % 5 == 0){
    console.log("Buzz")
  }
  else {
    console.log(i)
  }

}

//////////////////////////////////////////////////////////////////////////////
//
// Question 11
//
