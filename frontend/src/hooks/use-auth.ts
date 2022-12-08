import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
import { useData } from './use-data'

export const useAuth = () => {
  const { user, setUser, removeUser } = useContext(AuthContext)
  const { addUser } = useData()

  const login = (user: string) => {
    addUser(user)
    setUser(user)
  }

  const logout = () => {
    removeUser()
  }

  return { user, login, logout }
}
