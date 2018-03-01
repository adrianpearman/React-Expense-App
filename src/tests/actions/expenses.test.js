import { addExpense, editExpense, removeExpense } from '../../redux/actions/expenses'

test('should setup remove expense function', () => {
  const result = removeExpense({ id: 1234567890 })
  // toEqual is used as toBe will never be able to make two objects pass
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 1234567890
  })
})

test('should setup edit expense function', () => {
  const result = editExpense( 1234567890, { description: 'test', amount: 200})
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: 1234567890,
    updates: {
      description: 'test',
      amount: 200
    }
  })
})

//  using generated values for the ADD_EXPENSE function
test('should setup add expense function', () => {
  const expenseData = {
    description: 'rent',
    amount: 170000,
    createdAt: 1000,
    notes: 'notes'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      //used to help with id, that will change on every entry
      id: expect.any(String),
      notes: 'notes'
    }
  })
})

//  using default values for the ADD_EXPENSE function
test('should setup add expense function with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      notes: '',
      amount: 0,
      createdAt: 0
    }
  })
})
