import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Routes'
import AuthProvider from './contexts/AuthProvider'

createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </>
    
)
