import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

const ExpenseListItem = (props) => {
  return (
    <div>
      <Link to={`/edit/${props.id}`}><h3>Description: {props.description}</h3></Link>
      <p>Amount: {numeral(props.amount / 100).format('$0,0.00')}</p>
      <p>Date: {moment(props.createdAt).format('MMMM Do, YYYY')}</p>
    </div>
  )
}

export default ExpenseListItem
