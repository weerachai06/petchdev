import { useState } from "react"
import { api } from "~/utils/api"

type TTheme = 'dark' | 'light'

export const useCookie = () => {

  const [theme, setTheme] = useState<TTheme>('light')
  const cookieQueries = api.cookie.getCookie.useQuery(undefined, { 
    onSuccess: (data) => {
      setTheme(data.theme as TTheme)
    },
    retry: false
  })

  const cookieMutation = api.cookie.setCookie.useMutation({
    retry: false,
    onSuccess: async () => {
      return await cookieQueries.refetch()
    }
  })

  return { cookieMutation, theme, cookieQueries }
}