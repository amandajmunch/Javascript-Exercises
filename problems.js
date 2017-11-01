// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
for(let i = 0; i < 1000; i++){
  if(i % 3 ===0 || i % 5 === 0){
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

var arr = [1,2,5,2,4,1,2,1];

arr = arr.filter( function( item, index, inputArray ) {
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
reverseString('hello');


// Find longest word in a string

function longestWord(str){
  let words = string.split(' ');
  let longestWord = 0;
  for (var i = 0; i < words.length; i++){
    if (words[i].length > longestWord){
      longestWord = words[i].length;
    }
  }
  return longestWord;
}




