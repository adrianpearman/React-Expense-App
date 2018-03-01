const add = (a,b) => {
  return a + b
}

const generateGreeting = (name = 'Unknown') => {
  return `Hello ${name}`
}

test('should add to numbers', () => {
  const result = add(1,2)
  // if (result !== 3) {
  //   throw new Error(`The result was ${result}. Expected 3`)
  // }
  expect(result).toBe(3)
})

test('should return greeting', () => {
  const result = generateGreeting('Adrian')
  expect(result).toBe('Hello Adrian')
})

test('should return unknown greeting', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Unknown')
})
