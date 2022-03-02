import { render, screen } from '@redwoodjs/testing/web'

import TodoItem from './TodoItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TodoItem', () => {
  it('renders the todo list item text', () => {
    render(<TodoItem id={1} body="Nachos" status="on" />)
    expect(screen.getByText('Nachos')).toBeInTheDocument()
  })
})
