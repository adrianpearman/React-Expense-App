import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../redux/actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends Component {
  state = {
    calenderFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused: calenderFocused }))
  }

  render(){
    return(
      <div>
        <input
          type='text'
          value={this.props.filters.text} onChange={(e) => {
            e.preventDefault()
            this.props.dispatch(setTextFilter(e.target.value))
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              console.log(this.props.dispatch(sortByDate()))
              this.props.dispatch(sortByDate())
            } else if (e.target.value === 'amount') {
              console.log(this.props.dispatch(sortByAmount()))
              this.props.dispatch(sortByAmount())
            }
          }}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate = {this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
