import React from 'react'
import { useContext } from 'react'
import MainTemplate from 'template/MainTemplate'
import { GlobalStyles } from 'theme/GlobalStyles'
import { ThemeConfigContext } from 'theme/ThemeConfiguration'
import { Routes } from './Routes'

function App() {
  const themeConfig = useContext(ThemeConfigContext)

  return (
    <MainTemplate onToggle={themeConfig.handleChangeTheme}>
      <GlobalStyles />
      <Routes />
    </MainTemplate>
  )
}

export default App
