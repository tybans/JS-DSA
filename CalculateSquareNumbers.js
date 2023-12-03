// Question-13 : Write a JavaScript function that takes an array of numbers and uses the `map` method to calculate the square of each number. Return a new array containing the squared values.

function calculateSquareNumbers(numbers) {

    return numbers.map((number) => number**2)
    // (number**2) squares the numbers
}

numbers = [2, 4, 3, 6, 12, 32]
console.log(calculateSquareNumbers(numbers));