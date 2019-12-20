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
