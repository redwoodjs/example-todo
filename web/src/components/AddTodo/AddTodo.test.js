import { render } from '@redwoodjs/testing/web'

import AddTodo from './AddTodo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddTodo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddTodo />)
    }).not.toThrow()
  })
})
