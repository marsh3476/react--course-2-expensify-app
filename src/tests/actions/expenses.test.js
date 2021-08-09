import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';

import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";


const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

// test('should add expense to database and store', (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: 'Mouse',
//     amount: 3000,
//     note: 'this one bigger',
//     createdAt: 1000
//   }
//   store.dispatch(startAddExpense(expenseData)).then(() => {
//     const actions = store.getActions();
    
//     expect(actions[0]).toEqual({
//       type: 'ADD_EXPENSE',
//       expense: {
//         id: expect.any(String),
//         ...expenseData
//       }
//     })
//     return database.ref(`expense/${actions[0].expense.id}`).once('value');
//   }).then((snapshot) => {
//     expect(snapshot.val()).toEqual(expenseData);
//     done();
//   })
// });

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    const expenseData = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    }
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
      }
    })
    return database.ref(`expense/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  })
});


// test('should set up add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '', 
//       note: '', 
//       amount: 0, 
//       createdAt: 0 ,
//       id: expect.any(String)
//     }
//   })
// });