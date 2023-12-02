// Question-3 : Write a JavaScript function that takes an array of test scores and uses the `filter` method to return a new array containing only the passing scores (scores greater than or equal to 60).

// function Filtering(test) {
//     return test.filter((score) => score >= 60)
// }
// testScore = [100, 23, 50, 200, 150];
// console.log(Filtering(testScore));





function Filtering(scores) {

    const passingScore = scores.filter((score) => score >= 60);
    return passingScore;
  }

  const testScore = [75, 45, 90, 30, 65, 80];
  
  console.log(Filtering(testScore));
  