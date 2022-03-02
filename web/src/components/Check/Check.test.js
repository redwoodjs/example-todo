import { render } from '@redwoodjs/testing/web'

import Check from './Check'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Check', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Check status="on" />)
    }).not.toThrow()
  })
})
