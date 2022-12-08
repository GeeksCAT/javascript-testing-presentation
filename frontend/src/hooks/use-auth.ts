import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'

export const useAuth = () => {
  const { user, setUser, removeUser } = useContext(AuthContext)

  const login = (user: string) => {
    setUser(user)
  }

  const logout = () => {
    removeUser()
  }

  return { user, login, logout }
}
