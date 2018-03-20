import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters={filters}
    />
  )
})

test('Should render ExpenseListFilters component', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('Should handle text change', () => {
  let value = 'rent'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date', () => {
  let value = 'date'
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
  let value = 'amount'
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle data change', () => {
  const startDate = moment(0).add(3, 'years')
  const endDate = moment(0).add(9, 'years')
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle data focus change', () => {
  const calendarFocused = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
