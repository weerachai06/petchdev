import { useTheme } from '@mui/material'
import ToggleMode from 'components/common/TaggleMode/ToggleMode'
import React from 'react'
import { useThemeConfigContext } from 'theme/ThemeConfiguration'

const MainTemplate: React.FC<{
  children: React.ReactNode
}> = ({ children }): JSX.Element => {
  const theme = useTheme()
  const themeConfig = useThemeConfigContext()
  return (
    <>
      {children}
      <ToggleMode
        isDarkMode={theme.name === 'darkTheme' ? true : false}
        onToggle={themeConfig.handleChangeTheme}
      />
    </>
  )
}

export default MainTemplate
