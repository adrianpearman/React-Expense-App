import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../redux/actions/expenses'

export class AddExpensePage extends Component{
  startAddExpense = (expense) => {
    // uses the redux store to move the data to the store
    // props.dispatch(addExpense(expense))
    this.props.startAddExpense(expense) // changed to be able to test the component. same functionality.
    // moves the user the home page after the form submitting
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.startAddExpense}
          buttonText='Add Expense'
        />
      </div>
    )
  }
}

const mapDispathToProps = (dispatch) => {
  return{
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
}
export default connect(undefined, mapDispathToProps)(AddExpensePage)
