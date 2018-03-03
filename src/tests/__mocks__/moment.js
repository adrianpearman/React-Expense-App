const moment=require.requireActual('moment') //used to mock a 3rd party library

export default (timestamp = 0) => {
  return moment(timestamp)
}
