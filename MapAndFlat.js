// Question-10 : Write a JavaScript function that takes an array of words and uses the `flatMap` method to split each word into its individual characters and return a single-level array of characters.



// flatMap() method

    // The flatMap() method in JavaScript is used to both map and flatten an array. It applies a provided function to each element of the array and then flattens the result into a new array.

    // Syntax:- array.flatMap(callback(currentValue, index, array));

    // callback: A function that is called for each element in the array. It should return an array (or an array-like object). The resulting arrays are then flattened into a single-level array.





function mapAndFlat(words) {
    return words.flatMap((word) => word.split(""));
}

words = ["words", "are", "power"];
console.log(mapAndFlat(words));