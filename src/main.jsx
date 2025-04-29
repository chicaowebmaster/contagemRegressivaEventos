import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import './index.css'

// Pages
import Home from './routers/Home.jsx'
import Countdown from './routers/Countdown.jsx'

// Context
import { CountdownProvider } from './context/CountdownContext.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
             path: "/",
             element: <Home /> 
          },
          {
             path: "/countdown",
             element: <Countdown />
          }
       ]    
    }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownProvider>
     <RouterProvider router={router} />
    </CountdownProvider>
  </StrictMode>,
)
