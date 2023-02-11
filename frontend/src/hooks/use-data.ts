import { useContext } from 'react'
import { DataContext } from '../contexts/Data'

export const useData = () => {
  const { users, addUser, question, sendAnswer, results } =
    useContext(DataContext)

  return { users, addUser, question, sendAnswer, results }
}
