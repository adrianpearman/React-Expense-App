import React, {Component} from 'react'
import moment from 'moment'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'

// const date = new Date()
const date = moment()
// console.log(date.format('MMM Do YYYY'));


class ExpenseForm extends Component{
  constructor(props){
    super(props)

    this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : ' ',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment() ,
        calendarFocused: false,
        submitError: ''
      }
  }


  // react-dates funtion to allow for dates to be selected before current date
  isOutsideRange = () => {
    return false
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description: description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note: note}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt: createdAt }))
    }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onExpenseSubmit = (e) => {
    e.preventDefault()
    // insures that the expenses have the right information before submitting
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ submitError: 'Please provide a description and amount'}))
    } else {
      this.setState(() => ({ submitError: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10)*100, //changes the value from a string a float value
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render(){
    return (
        <form className='form' onSubmit={this.onExpenseSubmit}>
          { this.state.submitError ? <p className='form__error'>{this.state.submitError}</p> : null }
          <input
            className='text_input'
            type='text'
            placeholder='Description'
            value={this.state.description}
            autoFocus
            onChange={this.onDescriptionChange}/>
          <input
            className='text_input'
            type='number'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange = {this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={this.isOutsideRange}
          />
          <textarea
            className='textarea'
            placeholder='Leave a note for your expense (Optional)'
            onChange={this.onNoteChange}
          ></textarea>
          <div>
            <button className='button'>{this.props.buttonText}</button>
          </div>
        </form>
    )
  }
}

export default ExpenseForm
