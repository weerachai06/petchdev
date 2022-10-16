import React from 'react'
import { render, screen } from 'test-utils/react'
import ToggleMode from './ToggleMode'

test('<ToggleMode/>', async () => {
  render(<ToggleMode />)
  const iconButtonElement = await screen.findByTestId('Brightness4Icon')
  expect(iconButtonElement).toBeInTheDocument()
})
