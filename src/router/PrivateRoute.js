import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({ isAuthenicated, component: Component, ...rest }) => {
  return (
    <Route  {...rest} component={(props) => (
        isAuthenicated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) :
        (
          <Redirect to='/'/>
        )
      )}
    />
  )
}

const mapStateToProps = (state) => ({
   isAuthenicated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
