// Joined 2023, 08
// Current 2024, 06
const shouldHave = [
  [2023, 8],
  [2023, 9],
  [2023, 10],
  [2023, 11],
  [2023, 12],
  [2024, 1],
  [2024, 2],
  [2024, 3],
  [2024, 4],
  [2024, 5],
  [2024, 6]
]
const weHave = [
  [2023, 8],
  [2023, 9],
  [2023, 10],
  [2024, 1],
  [2024, 2],
  [2024, 4],
  [2024, 6]
]


// Write a function that takes in two arrays and returns a new
// array containing the values that are present in the first array
// but not the second array:
function getMissingMonths(monthsShouldHave, monthsWeHave) {
  // Create a missingMonths array:
  let missingMonths = []

  // Loop through monthsShouldHave:
  for (let monthYear of monthsShouldHave) {
    // Will be true or false, depending on whether it is missing:
    let isMissing = checkForMissingMonthYear(monthYear, monthsWeHave)
    
    // If it is missing, we store it in missingMonths:
    if (isMissing === true) {
      missingMonths.push(monthYear)
    }
  }

  // Return missingMonths:
  return missingMonths
}

// Takes in:
//  * toCheck: [2023, 9]
//  * toLookThrough: 
  //  * (This is the array that contains [YYYY, MM] of actual
  //    submitted data.)
        // [
        //   [2023, 8],
        //   [2023, 9],
        //   [2024, 6]
        // ]
// Returns true if `toCheck` is NOT in `toLookThrough`.
// Returns false if `toCheck` is in `toLookThrough`.
function checkForMissingMonthYear(toCheck, toLookThrough) {
  // If we find `toCheck` inside `toLookThrough`, return false:
  for (let submittedMonthYear of toLookThrough) {
    if (toCheck[0] === submittedMonthYear[0] && toCheck[1] === submittedMonthYear[1]) {
      // It's not missing! Nice job, user!
      return false
    }
  }
  // If we don't `toCheck` inside `toLookThrough`, return true:
  return true
}


let testMissingMonths = getMissingMonths(shouldHave, weHave)

console.log(testMissingMonths)
// this 👆, should output
// this 👇
// [
//  [2023, 11],
//  [2023, 12],
//  [2023, 3],
//  [2023, 5],
// ]


