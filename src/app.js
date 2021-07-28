import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill yay', createdAt: 2 }));
store.dispatch(addExpense({ description: 'Water Bill yay', amount: 4500, createdAt: 3 }));
store.dispatch(addExpense({ description: 'Rent', amount: 10950, createdAt: 1 }));


const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));




