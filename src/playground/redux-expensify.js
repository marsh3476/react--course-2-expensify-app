import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';





// ADD EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt=0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description: description,
    note: note, 
    amount: amount,
    createdAt: createdAt
  }
});

// EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});
// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});
// TEXT FILTER
const setTextFilter = (newTextFilter = '') => ({
  type: 'SET_TEXT_FILTER',
  newTextFilter: newTextFilter
});

// SORT BY AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT BY DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate: startDate
})

// SET_End_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate: endDate
})







//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(expenseElement => expenseElement.id !== action.id);
    case 'EDIT_EXPENSE':
      
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default: 
      return state;
  }
};
// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startdate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.newTextFilter
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}






// FILTER
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    //console.log(a, b)
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? -1 : 1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1;
    }
  });

};







// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});





const expenseTwo = store.dispatch(addExpense(
  { description: 'coffee', amount: 100, createdAt: -21000 }
  ));
  const expenseTest = store.dispatch(addExpense(
    { description: 'test', amount: 300, createdAt: 1000 }
  ));
const expenseOne = store.dispatch(addExpense(
  { description: 'rent', amount: 200, createdAt: -1000 }
));




// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate()); // set to undefined
//store.dispatch(setEndDate(999));
// store.dispatch(setEndDate()); // set to undefined






const demoState = {
  expenses: [{
    id: 'asdfklj',
    description: 'January Rent',
    note: 'This iwas the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const obj = {
//   name: 'Jen',
//   age: 30
// }
// console.log({
//   ...obj,
//   hone: 'Iceland',
//   age: 35
// })
