import { IconButton } from '@mui/material'
import { Box, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import React from 'react'
import { ThemeNameType } from 'theme/ThemeConfiguration'

export type ToggleModePropsType = {
  onToggle?: (mode: ThemeNameType) => void
  isDarkMode?: boolean
}

function ToggleMode({ onToggle, isDarkMode = false }: ToggleModePropsType) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'fixed',
        top: theme.spacing(3),
        right: theme.spacing(3),
      }}
    >
      <IconButton
        sx={{
          color: theme.palette.getContrastText(
            theme.customPalete.background.paper
          ),
        }}
        onClick={(): void =>
          isDarkMode ? onToggle?.('lightTheme') : onToggle?.('darkTheme')
        }
        role="button"
      >
        <Brightness4Icon />
      </IconButton>
    </Box>
  )
}

export default ToggleMode
