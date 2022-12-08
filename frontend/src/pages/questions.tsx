import { useState } from 'react'
import Question from '../components/Question'
import Results from '../components/Results'
import { useAuth } from '../hooks/use-auth'
import { useData } from '../hooks/use-data'

export default function Questions() {
  const { sendAnswer } = useData()
  const { user } = useAuth()
  const [answered, setAnswered] = useState(false)

  const onAnswer = (answerId: number) => {
    sendAnswer(answerId, user!)
    setAnswered(true)
  }

  return (
    <div>
      {!answered && <Question onAnswer={onAnswer} />}
      {answered && <Results />}
    </div>
  )
}
