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
    <div className='content-container'>
      <div className='list-header'>
        <div className='show-for-mobile'>Expenses</div>
        <div className='show-for-desktop'>Expense</div>
        <div className='show-for-desktop'>Amount</div>
      </div>

      <div className='list-body'>
        { props.expenses.length === 0 ? (
          <div className='list-item--message'>
            <span>
              Currently there are no Expenses
            </span>
          </div>
        ) : {Expenses} }
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
