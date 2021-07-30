import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';


test('should render Expenses summary for single expense', () => {
  const wrapper = shallow(<ExpensesSummary 
                          filteredExpenses={[expenses[0]]}
                          getExpenseTotal={() => 1500} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Expenses summary for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary 
                          filteredExpenses={expenses}
                          getExpenseTotal={() => 1500} />);
  expect(wrapper).toMatchSnapshot();
});