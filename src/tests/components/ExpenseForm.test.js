import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm properly', () => {
  const wrapper = shallow(<ExpenseForm/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm properly with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid information', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('submitError').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot() //to validate the other snapshot
})

test('should set description on input change', () => {
  const value = 'new description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('should set note on textarea change', () => {
  const value = 'new note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('should set amount on valid input', () => {
  const value = '12.34'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('should not set amount on valid input', () => {
  const value = '12.3224'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
  expect(wrapper).toMatchSnapshot()
})

test('should call onSubmit prop for the form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} startAddExpense={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('submitError')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('should set new date on date change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const now = moment()
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toBe(focused)

})
