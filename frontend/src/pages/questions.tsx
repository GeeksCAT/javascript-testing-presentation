import { useState } from 'react'
import styled from 'styled-components'

import Question from '../components/Question'
import Results from '../components/Results'
import { useAuth } from '../hooks/use-auth'
import { useData } from '../hooks/use-data'

const QuestionsContainer = styled.div`
  margin: 50px;
  height: calc(100% - 100px);
`

export default function Questions() {
  const { sendAnswer, results: votes } = useData()
  const { user } = useAuth()
  const [answered, setAnswered] = useState(false)

  const onAnswer = (answerId: number) => {
    sendAnswer(answerId, user!)
    setAnswered(true)
  }

  return (
    <QuestionsContainer>
      {!answered && <Question onAnswer={onAnswer} />}
      {answered && <Results />}
    </QuestionsContainer>
  )
}
