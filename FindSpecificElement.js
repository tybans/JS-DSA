// Question-11 : Write a JavaScript function that takes an array of objects representing books and uses the `find` method to find and return the book with a specific title.




// find() method

    // The find() method in JavaScript is used to retrieve the first element in an array that satisfies a provided testing function. 

    // Syntax:- array.find(callback(element, index, array));

    // callback: A function that is called for each element in the array. It should return a truthy value if the element satisfies the condition.

    // The find() method returns the first element in the array for which the callback function returns true. If no element satisfies the condition, undefined is returned.

    // example:- 

    /*const numbers = [10, 20, 30, 40, 50];
      const foundNumber = numbers.find(number => number > 25);
      console.log(foundNumber);  // Output: 30 */




function findBooks(books, title) {
    return books.find((book) => book.title === title );
}

books = [
    {
        title : "Javascript",
        author : "Taiyab"
    },
    {
        title : "Python",
        author : "Ansari"
    },
    {
        title : "C++",
        author : "Abhishek"
    },
    {
        title : "Java",
        author : "Sunita"
    }
    
]

title = "C++";

console.log(findBooks(books, title));
