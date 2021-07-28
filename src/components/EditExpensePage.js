import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import React from 'react';
import ExpenseForm from './ExpenseForm';
 

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = (e) => {
    this.props.removeExpense(this.props.expense)
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense} 
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
  };
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => 
      expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);