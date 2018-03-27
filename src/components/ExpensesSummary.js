import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../redux/selectors/expenses'
import selectExpensesTotal from '../redux/selectors/expenses-total'

export const ExpensesSummary = (props) => {
  const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00')

  return(
    <div className='pageHeader'>
      <div className='content-container'>
        <h1 className='pageHeader__title'>
          Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
        </h1>
        <div className='pageHeader__actions'>
          <Link to='/create' className='button'>
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
