import { createStore } from 'redux';

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
})

const resetCount = () => ({
  type: 'RESET'
});



const setCount = ({ setToValue }) => ({
  type: 'SET',
  setToValue: setToValue
});



const countReducer = (state =  { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setToValue
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
    
  }
}


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  // this function passed in gets called every time the store changes
  console.log(store.getState());
});




// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ setToValue: -1000 }));

