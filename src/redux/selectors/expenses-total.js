export default (expensesArray) => {
  if (expensesArray.length === 0 || null) {
    return 0
  } else {
    const reducer = (total, num) => { return total + num}
    const totalArray = []
    expensesArray.forEach((expense) => {
      totalArray.push(expense.amount)
    })
    return totalArray.reduce(reducer)
  }
}
