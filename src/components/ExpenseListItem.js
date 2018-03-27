import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

const ExpenseListItem = (props) => {
  return (
    <Link to={`/edit/${props.id}`} className='list-item'>
      <div>
        <h3 className='list-item__title'>Description: {props.description}</h3>
        <span className='list-item__subtitle'>
            <p>Date: {moment(props.createdAt).format('MMMM Do, YYYY')}</p>
        </span>
      </div>
      <h3 className='list-item__data'>Amount: {numeral(props.amount / 100).format('$0,0.00')}</h3>
    </Link>
  )
}

export default ExpenseListItem
