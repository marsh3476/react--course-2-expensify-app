import { v4 as uuidv4 } from 'uuid';

// ADD EXPENSE
export const addExpense = (
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
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});
// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
  }
  
};