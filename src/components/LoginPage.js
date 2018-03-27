import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../redux/actions/auth'

export const LoginPage = (props) => {
  return(
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expense App</h1>
        <p>You dont know what you've got until it's gone</p>
        <button onClick={props.startLogin} className='button'>Login with Google</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
