// Question-5 : Write a JavaScript function that takes an array of numbers and uses the `sort` method to sort the numbers in ascending order. Return the sorted array.

function sortingNumbers(numbers) {
    return numbers.sort((a, b) => a - b);

    //If a should come before b (in ascending order), the comparison function returns a negative value. In the case of (a, b) => a - b, this happens when a is less than b.

    // For example, when sorting [32, 12], the comparison function evaluates to 32 - 12, which is a positive value (20). This indicates that 32 should come after 12 in the sorted order.
}

givenNumbers = [ 32, 12, 45, 34, 14, 8, 92]
console.log(sortingNumbers(givenNumbers));





// For Descending Order
// function sortingNumbers(numbers) {
//     return numbers.sort((a, b) => b - a);
//     // If b should come before a (in descending order), the comparison function returns a positive value. In the case of (a, b) => b - a, this happens when b is less than a.

//     // For example, when sorting [32, 12], the comparison function evaluates to 12 - 32, which is a negative value (-20). This indicates that 32 should come before 12 in the sorted order.

// }

// givenNumbers = [ 32, 12, 45, 34, 14, 8, 92]
// console.log(sortingNumbers(givenNumbers));
