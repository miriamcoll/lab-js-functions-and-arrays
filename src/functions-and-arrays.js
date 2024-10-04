// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2) {
    return n1;
}
    else {
    return n2;
}
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if (arrayOfWords.length === 0) {
        return null;
    }
    let longestWord = arrayOfWords[0];
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }
    return longestWord;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++ ) {
      sum += numbers[i];
    }
    return sum
    }
    console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }

    let totalSum = sumNumbers(numbers2);

    const average = totalSum / numbers2.length;
    return average;
}

console.log(averageNumbers(numbers2))




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToFind) {
    if (wordsArray.length === 0) {
        return null;
    }

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === wordToFind) {
            return true; 
        }
      else {
         return false; 
      }
    }
}

console.log(doesWordExist(words2, "machine"))


