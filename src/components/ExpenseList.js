import React from 'react'
import { connect } from 'react-redux' // used to connect to the redux store

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../redux/selectors/expenses'

export const ExpenseList = (props) => {
  let Expenses = props.expenses.map((expense, index) => {
      return(
        <ExpenseListItem
          key={index}
          id={expense.id}
          description={expense.description}
          createdAt={expense.createdAt}
          amount={expense.amount}
        />
      )
  })

  return (
    <div>
      { props.expenses.length === 0 ? <p>Currently there are no Expenses</p> : null }
      {Expenses}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
