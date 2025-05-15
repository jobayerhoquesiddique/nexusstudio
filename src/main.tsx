
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'
import config from './config/env'

// Log configuration in development mode only
if (config.env.isDevelopment) {
  console.log('🚀 App running in development mode')
  console.log('✨ Environment config:', config)
}

createRoot(document.getElementById("root")!).render(<App />);
