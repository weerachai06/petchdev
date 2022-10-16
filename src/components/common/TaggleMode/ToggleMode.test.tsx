import React from 'react'
import { render, screen } from '@testing-library/react'
import ToggleMode from './ToggleMode'
import { ProvidersWrapper } from 'utils/wrapper-test.util'

test('<ToggleMode/>', async () => {
  render(<ToggleMode />, {
    wrapper: ProvidersWrapper,
  })
  const iconButtonElement = await screen.findByTestId('Brightness4Icon')
  expect(iconButtonElement).toBeInTheDocument()
})
