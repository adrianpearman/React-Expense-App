import React, {Component} from 'react'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'

// Components
import AddExpensePage from '../components/AddExpensePage'
import Header from '../components/Header'
import ExpenseDashBoard from '../components/ExpenseDashBoard'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
  return(
    <BrowserRouter >
      <div>
        <Header />
        <Switch>
          <Route path='/' exact={true} component={ExpenseDashBoard}/>
          <Route path='/create' component={AddExpensePage}/>
          <Route path='/edit/:id' component={EditExpensePage}/>
          <Route path='/help' component={HelpPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
