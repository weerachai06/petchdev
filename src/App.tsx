import React from 'react'
import MainTemplate from 'template/MainTemplate'
import { GlobalStyles } from 'theme/GlobalStyles'
import { Routes } from './Routes'

function App() {
  return (
    <MainTemplate>
      <GlobalStyles />
      <Routes />
    </MainTemplate>
  )
}

export default App
