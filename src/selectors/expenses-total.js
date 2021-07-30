

const getExpenseTotal = (expenses) => {
  if (expenses.length === 0) { return 0; }
  let expenseTotal = 0;
  expenses.forEach((expense) => {
    expenseTotal += expense.amount;
  })
  return expenseTotal;
};

export default getExpenseTotal;