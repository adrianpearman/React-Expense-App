import moment from 'moment'

export default [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 199,
  createdAt: 0
  },
  {
  id: '2',
  description: 'water bill',
  note: '',
  amount: 4599,
  createdAt:  moment(0).add(1, 'days').valueOf()
  },
  {
  id: '3',
  description: 'phone bill',
  note: '',
  amount: 10999,
  createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
  id: '4',
  description: 'tacos',
  note: '',
  amount: 599,
  createdAt:  moment(0).add(4, 'days').valueOf()
}]
