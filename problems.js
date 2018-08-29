// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;
for (let i = 0; i < 1000; i++){
  if (i % 3 ===0 || i % 5 === 0){
    sum += i;
  }
}

console.log(sum);

// JavaScript function that reverse a number.
function reverseANumber(num){
  num = num + "";
  return num.split("").reverse().join("");
}

// Javascript function to remove duplicates from array

let arr = [1,2,5,2,4,1,2,1];

arr = arr.filter(function(item, index, inputArray) {
           return inputArray.indexOf(item) == index;
});

// Take in a string and print out the words and how many time each is used

function wordCount(str){
  const cleanString = str.replace(/[^a-zA-Z 0-9]+/g,'').trim();
  const words = cleanString.split(' ');
  const wordCounts = {};
    words.forEach(word => {
      const lowerCasedWord = word.toLowerCase();
      wordCounts[lowerCasedWord] = wordCounts[lowerCasedWord] || 0;
      wordCounts[lowerCasedWord]++;
  })

  console.log(wordCounts);
};


// Reverse a string
function reverseString(str) {
  const newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
    return newString;
}


// Find longest word in a string

function longestWord(str){
  let words = str.split(' ');
  let longestWord = 0;
  for (var i = 0; i < words.length; i++){
    if (words[i].length > longestWord){
      longestWord = words[i].length;
    }
  }
  return longestWord;
}

// Factorialize a number

function factorial(num){
  let array = [];
  for (let i = 0; i <= num; i++){
    array.push(i);
  }

  let answer = array.reduce(function(a,b){
    return a * b;
  })

  return answer;
}

// Is the word a palindrome

function palindrome(str){
  str = str.toLowerCase().replace(/[\W_]/g,'');
  if (str === str.split("").reverse().join('')){
    return true;
  } else {
    return false;
  }
}

// Find the longest word in a string

function longest(str){
  let longest = 0;
  str.split(' ').forEach(function(word){
    if (word.length > longest){
      longest = word.length;
    }
  });
  return longest;
}

//  Convert number into roman numeral

function romanNumeral(num){
  var romans = {
    M : 1000,
    CM: 900
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = '';
  for (let key in romans){
    if (num >= romans[key]){
      result += key.repeat(Math.trunc(num / romans[key]));
      num -= romans[key] * Math.trunc(num / romans[key]);
    }
  }
  return result;
}


// Given a node in a binary tree, find its successor

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {

  current = inputNode
  if (!inputNode){
    return null;
  }

  if (inputNode.right){
    var current = inputNode.right;

    while (current.left){
      current = current.left;
    }

    return current;

  } else {
    var current = current.parent;

    while (current.parent && current.parent.left !== current){
      current = current.parent;
    }
    return current.parent;
  }
  return null;
}

// Find the number of days in-between two dates

function daysBetween(date1, date2){
  function toTimestamp(date){
    let month = 30;
    let year = 365;
    let totalDays = date.day + (date.month * month) + (date.year * year);
    return total days;
  }

  let difference = toTimestamp(date1) - toTimestamp(date2);

  return Math.abs(difference);
}





