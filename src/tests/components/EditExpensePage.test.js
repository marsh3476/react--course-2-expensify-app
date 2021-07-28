import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, removeExpense, wrapper, expense;

beforeEach(() => {
  editExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  removeExpense = jest.fn();
  expense = expenses[1];
  wrapper = shallow(<EditExpensePage 
    editExpense={editExpense} 
    history={history} 
    removeExpense={removeExpense}
    expense={expense} />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  wrapper.find('button').prop('onClick')({});
  expect(removeExpense).toHaveBeenLastCalledWith(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
})