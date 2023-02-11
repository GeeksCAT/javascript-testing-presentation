import { useMemo, useState } from 'react'
import styled from 'styled-components'

import Question from '../components/Question'
import Results from '../components/Results'
import { useAuth } from '../hooks/use-auth'
import { useData } from '../hooks/use-data'

const QuestionsContainer = styled.div`
  margin: 50px;
  height: calc(100% - 100px);
`
const calculatePercentage = (count: number, total: number): number => {
  return Math.trunc((count / total) * 100)
}

export default function Questions() {
  const { sendAnswer, results: votes } = useData()
  const { user } = useAuth()
  const [answered, setAnswered] = useState(false)

  const onAnswer = (answerId: number) => {
    sendAnswer(answerId, user!)
    setAnswered(true)
  }

  const results = useMemo(() => Object.entries(votes.results).map(([id, v]) => ({
    value: calculatePercentage(v, votes.totalVotes),
    votes: v,
  })), [votes.results])

  return (
    <QuestionsContainer>
      {!answered && <Question onAnswer={onAnswer} />}
      {answered && <Results results={results} />}
    </QuestionsContainer>
  )
}
