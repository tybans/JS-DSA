// Question-8 : The some() method returns a Boolean value. It returns true if at least one element in the array satisfies the condition specified by the callback function. Otherwise, it returns false.


// every() method

    // The every() method in JavaScript is used to test whether all elements in an array pass a provided test function

    // syntax:- array.every(callback(element, index, array));

    // callback: A function that is called for each element in the array until it returns a falsy value. It is called with three arguments: element (the current element being processed), index (the index of the current element), and array (the array being processed).

    // The every() method returns a Boolean value. It returns true if the callback function returns a truthy value for every element in the array. Otherwise, it returns false.


function checkForAllPass(scores) {
    return scores.every((score) => score >= 60);
}

testScore = [72, 98, 76, 89, 65, 59];
console.log(checkForAllPass(testScore));