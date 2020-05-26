import { render, cleanup } from '@testing-library/react'

import TodoPage from './TodoPage'

describe('TodoPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<TodoPage />)
    }).not.toThrow()
  })
})
