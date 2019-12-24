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


// Question 3:

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

let title = 'mindful mel' // <3

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

let mixed = [23, -2, 'pie', 69, 420, 'alligator', 'empanadas']

function ascending(arr) {

  // code goes here Mel :)
  
}

ascending(mixed)

// how to filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// finding the type of each element: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// Examples:

console.log(typeof 2) // will print 'number'
console.log(typeof 'pie') // will print 'string'

// how to sort: https://www.w3schools.com/js/js_array_sort.asp
