// Question-9 : Write a JavaScript function that takes an array containing nested arrays and uses the `flat` method to flatten the array (remove nesting). Return a single-level array.


// flat() method

    // The flat() method in JavaScript is used to flatten nested arrays. It creates a new array that is a one-dimensional (flat) array derived from the original array.

    // Syntax:- array.flat([depth]);

    // depth (optional): A non-negative integer that specifies the depth of flattening. The default value is 1, which means the array will be flattened by one level. If depth is Infinity, the array will be flattened to the deepest level.

    // flat() method does not modify the original array; it returns a new array with the specified level of flattening. If no depth is provided, it defaults to 1. If you want to flatten the array completely, you can use flat(Infinity) or alternative approaches, like using recursion or combining flat() with flatMap().


function flatNestedArray(nestedArray) {
    // return nestedArray.flat();
    // return nestedArray.flat(2);

    return nestedArray.flat(Infinity);
}

nestedArray = [45, [34, 9], [5, [43, 90, 54], [94, [23, 87]]]];
console.log(flatNestedArray(nestedArray));