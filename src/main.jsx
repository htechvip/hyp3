import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react"
import './index.css'
import App from './App.jsx'

Sentry.init({
  dsn: "https://6c06fd10bf3118af7b257230d7c78dd2@o4511322979631104.ingest.us.sentry.io/4511322990772224",
  sendDefaultPii: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
