import { createTheme, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import Cookies from 'js-cookie'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createContext } from 'react'

export type CustomPalete = {
  background: { paper: string }
}

export type ThemeNameType = 'lightTheme' | 'darkTheme'

declare module '@mui/material/styles' {
  interface Theme {
    customPalete: CustomPalete
    name: ThemeNameType
  }

  interface ThemeOptions {
    customPalete: CustomPalete
    name: ThemeNameType
  }
}

export const lightTheme = createTheme({
  customPalete: {
    background: {
      paper: grey['50'],
    },
  },
  name: 'lightTheme',
})

export const darkTheme = createTheme({
  customPalete: {
    background: {
      paper: grey['900'],
    },
  },
  name: 'darkTheme',
})

type ThemeConfigurationPropsType = {
  children?: React.ReactNode
  cookieName?: string
}

export const ThemeConfigContext = createContext<{
  handleChangeTheme?: (theme: ThemeNameType) => void
}>({})

export const useThemeConfigContext = () => useContext(ThemeConfigContext)

const ThemeConfigProvider = ({
  children,
  cookieName = 'theme',
}: ThemeConfigurationPropsType): JSX.Element => {
  const [theme, setTheme] = useState(lightTheme)
  const moutedRef = useRef(false)

  const handleChangeTheme = useCallback(
    (mode: ThemeNameType) => {
      if (mode === 'darkTheme') {
        setTheme(darkTheme)
      } else {
        setTheme(lightTheme)
      }
      Cookies.set(cookieName, mode)
    },
    [cookieName]
  )

  const themeContextValue = {
    handleChangeTheme,
  }

  useEffect(() => {
    if (!moutedRef.current) {
      const themeName = Cookies.get(cookieName) ?? ''
      if (themeName) {
        handleChangeTheme(themeName as ThemeNameType)
      }
      moutedRef.current = true
      return
    }
  }, [cookieName, handleChangeTheme])

  return (
    <ThemeConfigContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeConfigContext.Provider>
  )
}

export default ThemeConfigProvider
