import { useContext } from 'react'
import { DataContext } from '../contexts/Data'

export const useData = () => {
  const { users, addUser, question, sendAnswer, currentAnswers } =
    useContext(DataContext)

  return { users, addUser, question, sendAnswer, currentAnswers }
}
