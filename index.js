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

