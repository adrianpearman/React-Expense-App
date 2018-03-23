import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../redux/actions/auth'

export const LoginPage = (props) => {
  return(
    <div>
      <button onClick={props.startLogin}>Login</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
