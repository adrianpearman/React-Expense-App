import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper;

// refactored the variables in the test suite
beforeEach(() => {
  startAddExpense = jest.fn()
  history = { push: jest.fn()}
  wrapper =  shallow(<AddExpensePage startAddExpense={startAddExpense} history = {history} />)
})

test('should render Add Expense Page', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Add Expense Page', () => {
  wrapper.find('ExpenseForm').prop('startAddExpense')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})
