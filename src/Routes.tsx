import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from 'pages/home/Home'

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ])
}
