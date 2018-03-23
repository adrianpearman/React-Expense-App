import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses } from '../../redux/actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'testtesttest'
const defaultAuthState = { auth: { uid }}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

// GATHERING OBJECTS FROM DATABASE
test('should setup setExpense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from the firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})


// REMOVE EXPENSE TEST
test('should setup remove expense function', () => {
  const result = removeExpense({ id: 1234567890 })
  // toEqual is used as toBe will never be able to make two objects pass
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 1234567890
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[0].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})


// EDIT EXPENSE TEST
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

test('should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[0].id
  const updates = {amount: 29900}
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount)
      done()
  })
})



// ADD EXPENSE TEST
//  using generated values for the ADD_EXPENSE function
test('should setup add expense function', () => {
  const action = addExpense(expenses[1])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]

    // Made obsoluete due to the change in the actions/expense file
    // expense: {
    //   ...expenseData,
    //   //used to help with id, that will change on every entry
    //   id: expect.any(String),
    //   notes: 'notes'
    // }
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseData = {
    description: 'headphones',
    amount: 30000,
    notes: 'replacement headphones',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    // nested callback method
    // return database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
    //   expect(snapshot.val()).toEqual(expenseData)
    //   done()
    // })

    // promise chaining method
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseDefault = {
    description: '',
    amount: 0,
    notes: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense(expenseDefault)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefault)
    done()
  })
})

// //  using default values for the ADD_EXPENSE function
// test('should setup add expense function with default values', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       notes: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// })
