import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRouter'
import UnProtectedRoute from '../components/UnProtectedRouter'
import Main from '../layout/Main'
import ErrorPage from '../pages/error'
import Presentation from '../pages/presentation'
import Questions from '../pages/questions'
import Signin from '../pages/signin'
import questionLoader from './loaders/question.loader'

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
            <Questions />
          </ProtectedRoute>
        ),
      },
      {
        path: 'presentation/:questionId',
        element: <Presentation />,
        loader: questionLoader,
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
