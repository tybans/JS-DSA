// Question-14 : Write a JavaScript function that takes an array of full names and uses the `map` method to extract and return an array of first names.

function extractNames(names) {
    return names.map((fullName) => fullName.split(' ')[1]);
}

names = ["Taiyab Ansari", "Abhishek Gupta"]
console.log(extractNames(names));




// split() method

    // The split() method in JavaScript is used to split a string into an array of substrings based on a specified delimiter.

    // Syntax:- string.split(separator, limit);

    // separator: A string that specifies the delimiter at which to split the original string. If omitted, the entire string is returned as the only element in the resulting array.

    //limit (optional): An integer that specifies the maximum number of splits. The split() method stops splitting the string after the specified number of splits, and the remaining, unsplit part is returned as the last element in the array.

    // Example:- 
    // 1
        //const sentence = "This is a sample sentence";

        // // Split the sentence into an array of words
        // const wordsArray = sentence.split(' ');

        // console.log(wordsArray);
        // // Output: ["This", "is", "a", "sample", "sentence"]
    
    // 2
    
        // const date = "2023-12-01";

        // // Split the date into an array of year, month, and day
        // const dateArray = date.split('-');
        
        // console.log(dateArray);
        // // Output: ["2023", "12", "01"]
        
 