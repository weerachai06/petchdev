import { useTheme } from '@mui/material'
import ToggleMode, {
  ToggleModePropsType,
} from 'components/common/TaggleMode/ToggleMode'
import React from 'react'

const MainTemplate: React.FC<
  {
    children: React.ReactNode
  } & Pick<ToggleModePropsType, 'onToggle'>
> = ({ children, onToggle }): JSX.Element => {
  const theme = useTheme()
  return (
    <>
      {children}
      <ToggleMode
        isDarkMode={theme.name === 'darkTheme' ? true : false}
        onToggle={onToggle}
      />
    </>
  )
}

export default MainTemplate
