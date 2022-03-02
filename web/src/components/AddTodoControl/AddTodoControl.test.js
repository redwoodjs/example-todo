import { render } from '@redwoodjs/testing/web'

import AddTodoControl from './AddTodoControl'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddTodoControl', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddTodoControl />)
    }).not.toThrow()
  })
})
