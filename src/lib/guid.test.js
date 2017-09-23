import guid from './guid.js'

test('adds 1 + 2 to equal 3', () => {
  expect(guid().length).toBe(36)
})
