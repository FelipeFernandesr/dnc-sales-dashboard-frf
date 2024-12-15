import { createContext, useState, useEffect, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lighTheme } from '@/styles' // Corrigido de lighTheme para lightTheme
import { AppThemeContextProps } from '@/types'

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(undefined)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const [appTheme, setAppTheme] = useState(() => {
        return localStorage.getItem('theme') ?? 'light'
    })

    const toggleTheme = () => {
        setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', appTheme)
    }, [appTheme]) // Adicionado appTheme como dependência

    return (
        <AppThemeContext.Provider value={{ appTheme, toggleTheme }}>
            <ThemeProvider theme={appTheme === 'light' ? lighTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}
