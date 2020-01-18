// Problem 1:

// Reverse this string so it says Tacos backwards: "socaT"

let word = "Tacos"

function reverseString(str){
  return str.split("").reverse().join("");
}

reverseString(word);

// QUESTION 2:

// write a function that reverses the word order of a sentence

// example: "cuban sandwiches" would become "sandwiches cuban"

let delicious = "cuban sandwiches"


let truth = "you look like the nerd emoji 🤓"

function reverseSentence(str){
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
  for (let i = 0; i <= num; i++){
  let randomFood = menu[Math.floor(Math.random()*menu.length)]
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


newMixed.sort(function(a, b){return a-b});

  
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

  for (i=0; i <string.length; i++){
    sum = sum + parseInt(string.substring(i, i+1));
  }
return sum;
}

sumDigits(10);
sumDigits(99);
sumDigits(-32);


//
//
//
//
//
//
//
//