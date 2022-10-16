import React from 'react'
import { GlobalStyles as GlobalStylesProvider, useTheme } from '@mui/material'

export const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <GlobalStylesProvider
      styles={{
        body: {
          background: theme.customPalete.background.paper,
        },
      }}
    />
  )
}
