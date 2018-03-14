import selectExpensesTotal from '../../redux/selectors/expenses-total'
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses are listed', () => {
  const response = selectExpensesTotal([])
  expect(response).toBe(0)
})

test('should correctly return the value of one expense', () => {
  const response = selectExpensesTotal([expenses[0]])
  expect(response).toBe(199)
})

test('should correctly return the value of all expense', () => {
  const response = selectExpensesTotal(expenses)
  expect(response).toBe(16396)
})
