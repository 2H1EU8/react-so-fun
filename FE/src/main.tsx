import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { customTheme } from './assets/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
