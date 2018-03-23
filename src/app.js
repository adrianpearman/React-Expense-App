// Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { firebase } from './firebase/firebase'

// Components
import AppRouter, { history } from './router/AppRouter'
import configStore from './redux/store/configStore'
import { startSetExpenses } from './redux/actions/expenses'
import { logIn, logOut } from './redux/actions/auth'
import getVisibleExpenses from './redux/selectors/expenses'

// Styling
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(App, document.getElementById('app'))
    hasRendered = true
  }
}

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading..</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(logIn(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logOut())
    renderApp()
    history.push('/')
  }
})
