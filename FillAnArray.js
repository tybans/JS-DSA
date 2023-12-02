// Question-6 : Write a JavaScript function that takes an array of zeros and uses the `fill` method to fill the array with a specified value. Return the modified array.


// About Fill()
    // The fill() method in JavaScript is used to fill all the elements of an array with a specified value. It changes the elements of the array in place, meaning it modifies the original array and does not create a new one.

    // The Syntax :- array.fill(value, start, end);

    // value: The value to fill the array with.

    // start (optional): The index at which to start filling the array (default is 0).

    // end (optional): The index at which to stop filling the array (default is array.length)


function fillArray(array, value) {
    return array.fill(value)
}

const originalArray = Array(5).fill(0)

const modifiedArray = fillArray(originalArray, 7)
console.log(originalArray, "Original Array...");
console.log(modifiedArray, "Modified Array...");