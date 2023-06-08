const { equal } = require("assert");

// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna = "") {
  if (dna.includes("T")) {
    return dna.replaceAll("T", "U");
  }

  return dna;
}

// ejemplo "GCAT"  =>  "GCAU"

console.log(DNAtoRNA("GCA"));

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
  // your code here

  let result = [];
  let i = 0;
  while (i < n) {
    i++;
    result.push(i);
  }

  return result;
}

console.log(monkeyCount(5));

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  //Get Coding!
  const bulletsNeeded = bullets / 2;

  if (bulletsNeeded >= dragons) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(3, 2));

// Square(n) Sum
// Complete the sum of squares function so that it squares each number passed to it and then sums the results.
// for example, for [1, 2, 2]it should return 9 because 1^2 + 2^2 + 2^2 + 2^2 = 9.

function squareSum(numbers = []) {
  let resulfinal = 0;
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * i);
  }

  return result.reduce((acc, value) => acc + value, resulfinal);
}

console.log(squareSum([0, 3, 4, 5]));

// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  // Return a string of the number here!

  return num.toString();
}

console.log(numberToString(22));

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s * 27.778);
}
console.log(cockroachSpeed(1.09));

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

let names0 = [];
let names1 = ["Peter"];
let names2 = ["Jacob", "Alex"];
let names3 = ["Max", "John", "Mark"];
let names4 = ["Alex", "Jacob", "Mark", "Max"];

function likes(names) {
  // TODO
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}
console.log(likes(names4));

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
function reverseSeq(n) {
  let result = [];

  for (i = n; i > 0; i--) {
    result.push(i);
  }

  return result;
}

console.log(reverseSeq(5));
