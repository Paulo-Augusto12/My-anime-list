import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Header } from './Components/Header/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
