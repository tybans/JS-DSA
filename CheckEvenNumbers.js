// Question-7 : Write a JavaScript function that takes an array of numbers and uses the `some` method to check if the array contains at least one even number. Return `true` if an even number is found, otherwise `false`.


// some() method
    // The some() method in JavaScript is used to test whether at least one element in an array passes the test implemented by the provided function. 

    // Syntax:- array.some(callback(element, index, array));

    // callback: A function that is called for each element in the array until it returns a truthy value, indicating that the condition has been satisfied. It is called with three arguments: element (the current element being processed), index (the index of the current element), and array (the array being processed).

    // The some() method returns a Boolean value. It returns true if at least one element in the array satisfies the condition specified by the callback function. Otherwise, it returns false.


function checkingEvenNubers(evenNumbers) {
    return evenNumbers.some((number) => number % 2 ===0);
}

numbers = [3, 5, 11, 7, 9, 2]
console.log(checkingEvenNubers(numbers));