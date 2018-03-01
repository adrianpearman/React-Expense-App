import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../redux/actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        // uses the redux store to move the data to the store
        props.dispatch(addExpense(expense))
        // moves the user the home page after the form submitting
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage)
