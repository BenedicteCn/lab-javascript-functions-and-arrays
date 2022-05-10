// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {

  if (a > b) {

    console.log(`${a} is bigger than ${b}`)
  }

  else {

    console.log(`${b} is bigger than ${a}`)
  }


}

maxOfTwoNumbers(1,3)



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {

  let longestWord = ''

 for (let i = 0; i<words.length; i++) {

   if (words[i].length > longestWord.length) {

    longestWord = words[i]

   }

 }

 return longestWord

}

console.log('Iteration #2:', findLongestWord(words))



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sumNumb = 0

function sumNumbers(numbers) {

  for (i = 0 ; i < numbers.length ; i++ ) {

    sumNumb += numbers[i]
  }

  return sumNumb
}

console.log('Iteration #3:',sumNumbers(numbers))



// Iteration #3.1 Bonus:

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57

function sum(mixedArr) {

  let sumNumb2 = 0

  for (i = 0 ; i < mixedArr.length ; i++ ) {

    if (typeof mixedArr[i] === 'number') {
      sumNumb2 += mixedArr[i]
    }
    else if (typeof mixedArr[i] === 'string') {

      sumNumb2 += mixedArr[i].length
    }
    else if (typeof mixedArr[i] === 'boolean') {

      sumNumb2 += 1

    }

  }

  return sumNumb2
}

console.log('Iteration #3.1: ', sum(mixedArr))


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

let sumAverageNumbers = 0

function averageNumbers(numbersAvg) {

  for (i = 0 ; i < numbersAvg.length ; i++ ) {

    sumAverageNumbers += numbersAvg[i]
  }

  return sumAverageNumbers / numbersAvg.length


}

console.log('Iteration #4, lever 1:', averageNumbers(numbersAvg))


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
let sumWordsArr = 0

function averageWordLength(wordsArr) {

  for (i = 0 ; i < wordsArr.length ; i++ ) {

    sumWordsArr += wordsArr[i].length
  }


  return sumWordsArr / wordsArr.length

 }

console.log('Iteration #4, lever 2:', averageWordLength(wordsArr))

// Bonus - Iteration #4.1
function avg(mixedArr) {

  let sumMixedArr = 0

  for (i = 0 ; i < mixedArr.length ; i++ ) {

    if (typeof mixedArr[i] === 'number') {
      sumMixedArr += mixedArr[i]
    }
    else if (typeof mixedArr[i] === 'string') {

      sumMixedArr += mixedArr[i].length
    }
    else if (typeof mixedArr[i] === 'boolean') {

      sumMixedArr += 1

    }

  }

  return sumMixedArr / mixedArr.length

}
console.log('Iteration #4.1 :', avg(mixedArr))


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique) {

  let emptyArray = []

  for (let i = 0; i<wordsUnique.length; i++) {

    if (emptyArray.indexOf(wordsUnique[i])===-1) {

      emptyArray.push(wordsUnique[i])

    }

  }

  return emptyArray
}

console.log('Iteration #5:', uniquifyArray(wordsUnique))



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, word) {


  if (wordsFind.includes(word)){

  return true
  }


  else {

  return false
  }


}

console.log('Iteration #6:',doesWordExist(wordsFind, 'machine'))



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsCount, word) {

  let sumHowManyTimes = 0

  for (let i = 0; i<wordsCount.length; i++) {

    if (wordsCount[i].indexOf(word)!== -1) {

      sumHowManyTimes += 1

    }

  }

  return sumHowManyTimes

}

console.log('Iteration #7:', howManyTimes(wordsCount, 'matter'))


// Iteration #8: Bonus
const matrix = [
  [ 1,  2, 3, 4, 5]
  [ 1, 20, 3, 4, 5]
  [ 1, 20, 3, 4, 5]
  [ 1, 20, 3, 4, 5]
  [ 1,  4, 3, 4, 5]
]

const productAll = [product01, product02, product11, product12, product21, product22, product31, product32, product41, product42]

let product01 = matrix[0][0] * matrix[i][0+1] * matrix[i][0+2] * matrix[i][0+3]
let product02 = matrix[0][1] * matrix[i][1+1] * matrix[i][1+2] * matrix[i][1+3]

let product11 = matrix[i][0] * matrix[i][0+1] * matrix[i][0+2] * matrix[i][0+3]
let product12 = matrix[i][1] * matrix[i][1+1] * matrix[i][1+2] * matrix[i][1+3]

let product21 = matrix[i+1][0] * matrix[i+1][0+1] * matrix[i+1][0+2] * matrix[i+1][0+3]
let product22 = matrix[i+1][1] * matrix[i+1][1+1] * matrix[i+1][1+2] * matrix[i+1][1+3]

let product31 = matrix[i+2][0] * matrix[i+2][0+1] * matrix[i+2][0+2] * matrix[i+2][0+3]
let product32 = matrix[i+2][0] * matrix[i+2][1+1] * matrix[i+2][1+2] * matrix[i+2][1+3]

let product41 = matrix[i+3][0] * matrix[i+3][0+1] * matrix[i+3][0+2] * matrix[i+3][0+3]
let product42 = matrix[i+3][0] * matrix[i+3][1+1] * matrix[i+3][1+2] * matrix[i+3][1+3]

function greatestProduct(matrix) {


 for (let i = 0; i<matrix.length; i++) {


  let highestProduct = 0

   if ( productAll[i] > highestProduct) {

    highestProduct = productAll[i]

   }

 }

 return highestProduct


}
console.log(greatestProduct(matrix) )

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
