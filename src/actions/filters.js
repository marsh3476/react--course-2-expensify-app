

// TEXT FILTER
export const setTextFilter = (newTextFilter = '') => ({
  type: 'SET_TEXT_FILTER',
  newTextFilter: newTextFilter
});

// SORT BY AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT BY DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE
export const setStartDate = (startDate = undefined) => {
  console.log('')
  return {
    type: 'SET_START_DATE',
    startDate: startDate
  }
  
}

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate: endDate
})