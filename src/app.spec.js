import React from 'react'
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'
import App from './app'

describe('app', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})