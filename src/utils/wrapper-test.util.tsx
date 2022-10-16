import React from 'react'
import ThemeConfigProvider from 'theme/ThemeConfiguration'

export const ProvidersWrapper: React.FC<{
  children?: React.ReactNode
}> = ({ children }) => {
  return <ThemeConfigProvider>{children}</ThemeConfigProvider>
}
