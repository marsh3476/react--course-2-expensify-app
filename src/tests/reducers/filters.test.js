import filtersReducer from "../../reducers/filters";
import moment from 'moment';

test('should setup default fitlers values', () => {
  const state = filtersReducer(undefined, {  type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});


test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'this is some text';
  const action = {
    type: 'SET_TEXT_FILTER',
    newTextFilter: text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('this is some text');
})


test('should set start date', () => {
  const startDate = moment(0).add(2, 'days').valueOf();
  const action = {
    type: 'SET_START_DATE',
    startDate: startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});


test('should set end date', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0).add(4, 'days').valueOf()
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(0).add(4, 'days').valueOf());
});