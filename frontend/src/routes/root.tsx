import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRouter'
import UnProtectedRoute from '../components/UnProtectedRouter'
import Main from '../layout/Main'
import ErrorPage from '../pages/error'
import Signin from '../pages/signin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
    element: (
      <UnProtectedRoute>
        <Signin />
      </UnProtectedRoute>
    ),
  },
])

export default router
