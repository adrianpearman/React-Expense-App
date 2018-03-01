import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../redux/actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate sort by date filter', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should generate sort by amount filter', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should generate the setTextFilter with filter applied', () => {
  const action = setTextFilter('bill')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  })
})

test('should generate the setTextFilter with default values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
