// Question-12 : Write a JavaScript function that takes an array of strings representing colors and uses the `findIndex` method to find and return the index of a specific color in the array.



// findIndex() method

// The findIndex() method in JavaScript is used to find the index of the first element in an array that satisfies a provided testing function. 

// Syntax:- array.findIndex(callback(element, index, array));

// callback: A function that is called for each element in the array. It should return a truthy value if the element satisfies the condition.

// The findIndex() method returns the index of the first element in the array for which the callback function returns true. If no element satisfies the condition, it returns -1.


function specificColor(colors, index) {
    return colors.findIndex((color) => 
        color === index
    );
}

colors = ["red", "yellow", "blue", "green", "black"];
index = "blue";

console.log(specificColor(colors, index));