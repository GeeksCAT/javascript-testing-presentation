import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/error'
import Signin from './pages/signin'
import reportWebVitals from './reportWebVitals'
import Root from './routes/root'
import { AuthProvider } from './contexts/Auth'
import ProtectedRoute from './components/ProtectedRouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <div>main</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
