import React from 'react';
import { connect } from 'react-redux';
import selectExpensesByFilters from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {

  render() {
    return (
      <h1>Viewing {this.props.filteredExpenses.length} expense(s) totalling {numeral(
                      this.props.getExpenseTotal(this.props.filteredExpenses) / 100)
                      .format('$0,0.00')}</h1>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    filteredExpenses: selectExpensesByFilters(state.expenses, state.filters),
    getExpenseTotal: getExpenseTotal
  }
}
export default connect(mapStateToProps)(ExpensesSummary);
