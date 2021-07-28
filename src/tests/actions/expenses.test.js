
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should set up edit expense action object', () => {
  const action = editExpense('abc123', { description: 'new description' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { description: 'new description' }
  })
})

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 10900,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});


test('should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0 ,
      id: expect.any(String)
    }
  })
});