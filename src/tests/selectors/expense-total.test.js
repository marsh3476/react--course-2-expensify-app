import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return correct expenses total with empty expenses array', () => {
  expect(expensesTotal([])).toBe(0);
});

test('should return correct expense total value with single item in expenses array', () => {
  const value = expensesTotal([expenses[0]]);
  expect(value).toBe(expenses[0].amount);
});

test('should return correct expense total for array with multiple expenses', () =>{
  const expectedVal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(expensesTotal(expenses)).toBe(expectedVal);
});

