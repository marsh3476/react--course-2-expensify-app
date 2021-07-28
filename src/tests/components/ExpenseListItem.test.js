import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';


test('should create Expense List Item component', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} key={1} />);
  expect(wrapper).toMatchSnapshot();
})