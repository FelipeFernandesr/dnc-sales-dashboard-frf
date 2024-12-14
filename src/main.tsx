import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle, lighTheme } from './styles/'
import { AppThemeProvider } from './contexts/AppThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
    
  </StrictMode>,
)
