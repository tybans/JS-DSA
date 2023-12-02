// Question-4 : Write a JavaScript function that takes an array of names and uses the `forEach` method to log each name to the console.

function loggingNames(names) {
    return names.forEach(name => {
        console.log(name);
    });
}

nameList = ["Taiyab", "Abhishek", "Ravi", "Pramit"]
console.log(loggingNames(nameList));