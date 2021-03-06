import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    description: 'test',
    amount: 0,
    createdAt: 0,
    id: 10,
    note: ''
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    expense
  ])
});


test('should edit an expense', () => {
  const updates = {
    description: 'updated description',
    amount: 999
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({
    ...expenses[0],
    ...updates
  });
});

test('should not edit expense if expense not found', () => {
  const updates = {
    description: 'updated description',
    amount: 999
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 9,
    updates: updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})