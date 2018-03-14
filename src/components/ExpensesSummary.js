import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import selectExpenses from '../redux/selectors/expenses'
import selectExpensesTotal from '../redux/selectors/expenses-total'

export const ExpensesSummary = (props) => {
  const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00')

  return(
    <div>
      <h1>
        Viewing {props.expensesCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
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
