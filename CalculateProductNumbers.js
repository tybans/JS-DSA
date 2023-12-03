// Question-15 : Write a JavaScript function that takes an array of numbers and uses the `reduce` method to calculate the product of all the numbers. Return the product.



// reduce() method

    // The reduce() method in JavaScript is used to reduce an array to a single value. It iterates over each element of the array, applying a callback function that accumulates a result.

    // Syntax:- array.reduce(callback(accumulator, currentValue, index, array), initialValue);

    // callback: A function that is called for each element in the array. It takes four parameters:

    // accumulator: The accumulated result.

    // currentValue: The current element being processed in the array.

    // index (optional): The index of the current element being processed.

    // array (optional): The array on which reduce was called.

    // initialValue (optional): An initial value for the accumulator. If provided, the reduce() method starts with this initial value; otherwise, it uses the first element of the array as the initial value.

    // Example:
        // const numbers = [1, 2, 3, 4, 5];

        // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        // console.log(sum);  // Output: 15

        


function calculateProductNumbers(numbers) {
    return numbers.reduce((a, b) => a * b, 1)
}

numbers = [2, 1, 4, 3, 1, 2]
console.log(calculateProductNumbers(numbers));
