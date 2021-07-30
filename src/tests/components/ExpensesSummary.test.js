import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';


test('should render Expenses summary empty expenses array', () => {
  const wrapper = shallow(<ExpensesSummary 
                          filteredExpenses={expenses}
                          getExpenseTotal={() => 1500} />);
  expect(wrapper).toMatchSnapshot();
});