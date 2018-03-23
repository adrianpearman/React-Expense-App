import { logIn, logOut } from '../../redux/actions/auth'

test('should generate login action object', () => {
  const action = logIn('jkl091')
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'jkl091'
  })
})

test('should generate logout action object', () => {
  const action = logOut()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})
