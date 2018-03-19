import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import expensesReducers from '../reducers/expenses'
import filtersReducers from '../reducers/filters'

// This used to allow for the middleware and redux devtools to work together
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducers,
      filters: filtersReducers
    }),
    composeEnhancers(applyMiddleware(reduxThunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
