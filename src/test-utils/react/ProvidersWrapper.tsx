import React from 'react'
import ThemeConfigProvider from 'theme/ThemeConfiguration'
import { render as rtlRender, RenderOptions } from '@testing-library/react'

export const ProvidersWrapper: React.FC<{
  children?: React.ReactNode
}> = ({ children }) => {
  return <ThemeConfigProvider>{children}</ThemeConfigProvider>
}

function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) {
  return rtlRender(ui, {
    wrapper: ProvidersWrapper,
    ...options,
  })
}

export * from '@testing-library/react'

export { render }
