// Question-2 : Write a JavaScript function that takes an array of expenses and uses the `reduce` method to calculate the total amount spent. Return the total amount.


// function calculateTotalExpenses(expenses) {

//     const totalAmount = expenses.reduce((accumulator, currentExpense) => accumulator + currentExpense, 0);
  
//     return totalAmount;
//   }
  
//   const expenses = [50, 30, 20, 40, 10];
//   const totalAmountSpent = calculateTotalExpenses(expenses);
  
//   console.log(`Total amount spent: $${totalAmountSpent}`);
  


function calculateExpense(expense) {
    
    return expense.reduce((total, newExpense) => total + newExpense);
}

expenses = [5,8,97,13,64,3,10]
console.log(calculateExpense(expenses));