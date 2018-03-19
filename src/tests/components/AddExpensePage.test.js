import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let onSubmit, history, wrapper;

// refactored the variables in the test suite
beforeEach(() => {
  onSubmit = jest.fn()
  history = { push: jest.fn()}
  wrapper =  shallow(<AddExpensePage onSubmit={onSubmit} history = {history} />)
})

test('should render Add Expense Page', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Add Expense Page', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})
