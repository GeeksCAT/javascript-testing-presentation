import { useContext } from 'react'
import { DataContext } from '../contexts/Data'

export const useData = () => {
  const { users, addUser } = useContext(DataContext)

  return { users, addUser }
}
