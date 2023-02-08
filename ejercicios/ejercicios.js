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

console.log(squareSum([1, 2, 2]));

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
