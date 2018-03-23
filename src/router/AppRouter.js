import React, {Component} from 'react'
import { Route, Router, Switch, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// Components
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashBoard from '../components/ExpenseDashBoard'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => {
  return(
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path='/' exact={true} component={LoginPage}/>
          <PrivateRoute path='/dashboard' component={ExpenseDashBoard}/>
          <PrivateRoute path='/create' component={AddExpensePage}/>
          <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
