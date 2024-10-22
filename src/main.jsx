import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesProject from './routes/RoutesProject'

/**
 * Entry point for the React application. 
 * This file renders the main application component, 
 * encapsulated in StrictMode for highlighting potential problems 
 * in the application. It sets up the routing using RoutesProject.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RoutesProject />
  </StrictMode>,
)
