// Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// Components
import AppRouter from './router/AppRouter'
import configStore from './redux/store/configStore'
import { addExpense } from './redux/actions/expenses'
import { setTextFilter } from './redux/actions/filters'
import getVisibleExpenses from './redux/selectors/expenses'

// Styling
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);


const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(App, document.getElementById('app'))
