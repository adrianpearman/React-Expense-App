import authReducer from '../../redux/reducers/auth'

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'jkl890'
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
    }
  const state = authReducer({uid: 'poiqwer'}, action)
  expect(state).toEqual({})
})
