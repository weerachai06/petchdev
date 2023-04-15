import * as app from 'next/app'
import { api } from '~/utils/api'
import createEmotionCache from '~/config/createEmotionCache'
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'

const clientSideEmotionCache = createEmotionCache()

import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import '~/styles/globals.css'
// import { getCookieParser } from 'next/dist/server/api-utils'
import Cookies from 'js-cookie'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

type TThemeCallback = (theme: 'dark' | 'light') => void

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export interface MyAppProps extends app.AppProps {
  emotionCache?: EmotionCache
}

type TThemeValue = 'light' | 'dark'

interface MyAppPropsWithPageProps extends MyAppProps {
  pageProps: {
    cookies: Record<string, TThemeValue>
  }
}

export const AppContext = createContext<{
  theme: TThemeValue
  setTheme: TThemeCallback
}>({
  theme: 'light',
  setTheme: (_) => undefined,
})

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { cookies, ...pageProps },
}: MyAppPropsWithPageProps) => {
  const [themeValue, setThemeValue] = useState<TThemeValue>(() => {
    if (!cookies || !('theme' in cookies)) {
      return 'light'
    }
    return cookies?.['theme'] ?? 'light'
  })

  const [mounted, setMounted] = useState(false)

  const setThemeCallback = useCallback((theme: TThemeValue): void => {
    setThemeValue((currentTheme) => {
      try {
        Cookies.set('theme', theme)
        return theme
      } catch (error) {
        console.error('Cannot set theme into cookie storage')
        return currentTheme
      }
    })
  }, [])

  useEffect(() => {
    const newTheme = Cookies.get('theme')
    if (!newTheme) {
      return
    }
    return setThemeValue(newTheme as TThemeValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cookies.get('theme')])

  const globalTheme = useMemo(
    () => ({
      theme: themeValue,
      setTheme: setThemeCallback,
    }),
    [setThemeCallback, themeValue]
  )

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <CacheProvider value={emotionCache}>
      <AppContext.Provider value={globalTheme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext.Provider>
    </CacheProvider>
  )
}

export default api.withTRPC(MyApp)
