import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

////////////////////////////////

test('should handle text change', () => {
  const testValue = 'testValue';
  wrapper.find('input').simulate('change', {
    target: { value: testValue }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(testValue);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value: 'date'}
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount'}
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle dates changes', () => {
  const newDates = {
    startDate: moment(0),
    endDate: moment(0).add(5, 'years')
  }
  wrapper.find('DateRangePicker').prop('onDatesChange')(newDates);
  expect(setStartDate).toHaveBeenLastCalledWith(newDates.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(newDates.endDate);
})

test('should handle dates changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})