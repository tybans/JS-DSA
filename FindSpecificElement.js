// Question-11 : Write a JavaScript function that takes an array of objects representing books and uses the `find` method to find and return the book with a specific title.

function findBooks(obj) {
    return obj.find((book) => book.title);
}

books = [
    {
        title : "Javascript"
    },
    {
        title : "Python"
    },
    {
        title : "C++"
    },
    {
        title : "Java"
    }
    
]

console.log(findBooks(books));